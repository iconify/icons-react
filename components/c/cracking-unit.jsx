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
		"content": `<style>.n3mmsobwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21V6a2.5 2.5 0 0 1 5 0v15M4 21h16M9.5 9H4m0-1.5v3m10.5 4H20m0-1.5v3");
}
</style><path class="n3mmsobwh"/>`,
		"fallback": "uix:cracking-unit",
	});
}

export default Component;
