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
		"content": `<style>.x3jdr0bzt {
  fill: currentColor;
  d: path("m12 11.596l3.173-3.192H8.827zM5 15h14V5H5zm-1 5V4h16v16z");
}
</style><path class="x3jdr0bzt"/>`,
		"fallback": "material-symbols-light:bottom-panel-close-sharp",
	});
}

export default Component;
