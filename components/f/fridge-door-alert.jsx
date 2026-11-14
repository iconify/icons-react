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
		"content": `<style>.b-cgkhbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H4v-19h11.25v9.15M4 10h11.25M7 5.5v1.75M7 13v4m11-2.5V18m0 3h.01");
}
</style><path class="b-cgkhbou"/>`,
		"fallback": "uix-sharp:fridge-door-alert",
	});
}

export default Component;
