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
		"content": `<style>.xnvcx7b1r {
  fill: currentColor;
  d: path("M7.5 16h12V6h-12zm-1 1V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="xnvcx7b1r"/>`,
		"fallback": "material-symbols-light:ad-group-outline-sharp",
	});
}

export default Component;
