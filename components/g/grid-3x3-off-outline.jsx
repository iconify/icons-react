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
		"content": `<style>.utiua4gtz {
  fill: currentColor;
  d: path("m17.844 15l-1-1H19v1zM15 12.156L11.844 9H14V5h1v4h4v1h-4zm-5-5l-1-1V5h1zm10.102 14.367L15 16.421V19h-1v-3.579L13.579 15H10v4H9v-4H5v-1h4v-3.579L8.579 10H5V9h2.579L2.823 4.244l.708-.713l17.284 17.284z");
}
</style><path class="utiua4gtz"/>`,
		"fallback": "material-symbols-light:grid-3x3-off-outline",
	});
}

export default Component;
