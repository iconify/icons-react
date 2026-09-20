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
		"content": `<style>.pqyqcubos {
  fill: currentColor;
  d: path("M10 15.689L6.712 12.4l.688-.688l2.6 2.6l6.6-6.6l.688.688z");
}
</style><path class="pqyqcubos"/>`,
		"fallback": "material-symbols-light:check-small-sharp",
	});
}

export default Component;
