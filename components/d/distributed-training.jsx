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
		"content": `<style>.cpvbobcxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l3 1.75v3.5L12 9.5L9 7.75v-3.5ZM9 4.25L12 6l3-1.75M12 6v3.5M5.5 14l3 1.75v3.5L5.5 21l-3-1.75v-3.5Zm-3 1.75l3 1.75l3-1.75m-3 1.75V21m13-7l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Zm-3 1.75l3 1.75l3-1.75m-3 1.75V21m-10-5.25L12 9.5l3.5 6.25m-7 1.75h7");
}
</style><path class="cpvbobcxg"/>`,
		"fallback": "uix-sharp:distributed-training",
	});
}

export default Component;
