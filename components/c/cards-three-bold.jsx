import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g3vb5kr1j {
  fill: currentColor;
  d: path("M208 96H48a20 20 0 0 0-20 20v84a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84a20 20 0 0 0-20-20m-4 100H52v-76h152ZM44 68a12 12 0 0 1 12-12h144a12 12 0 0 1 0 24H56a12 12 0 0 1-12-12m16-40a12 12 0 0 1 12-12h112a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12");
}
</style><path class="g3vb5kr1j"/>`,
		"fallback": "ph:cards-three-bold",
	});
}

export default Component;
