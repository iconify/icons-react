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
		"content": `<style>.b_y5-ybko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9 0h9m-2.5 0v3.25M15.5 8v2.5m-.5 7h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="b_y5-ybko"/>`,
		"fallback": "uix-sharp:api-key-secure",
	});
}

export default Component;
