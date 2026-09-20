import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ev7s88b2g {
  fill: currentColor;
  d: path("M12 17.308L6.692 12l.708-.708l4.1 4.1V5.5h1v9.892l4.1-4.1l.708.708z");
}
</style><path class="ev7s88b2g"/>`,
		"fallback": "material-symbols-light:arrow-downward-alt-outline",
	});
}

export default Component;
