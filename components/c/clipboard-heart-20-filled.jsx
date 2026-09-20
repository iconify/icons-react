import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.af5ha5b_j {
  fill: currentColor;
  d: path("M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v4.503a3.84 3.84 0 0 0-1.998.654a3.852 3.852 0 0 0-4.874 5.916L11.555 18H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.149 15.68a.497.497 0 0 0 .707 0l3.814-3.814a2.85 2.85 0 1 0-4.031-4.031l-.136.136l-.137-.136a2.85 2.85 0 1 0-4.031 4.031z");
}
</style><path class="af5ha5b_j"/>`,
		"fallback": "fluent:clipboard-heart-20-filled",
	});
}

export default Component;
