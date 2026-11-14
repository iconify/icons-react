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
		"content": `<style>.togv5ib1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.499 8h7.002a1.75 1.75 0 0 1 1.523 2.611l-3.501 6.194a1.75 1.75 0 0 1-3.046 0l-3.501-6.194A1.75 1.75 0 0 1 6.499 8M16.5 8l4-4m-14 7.5h7M8.25 15h3.5");
}
</style><path class="togv5ib1s"/>`,
		"fallback": "uix:fine-strainer",
	});
}

export default Component;
