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
		"content": `<style>.kxq5i0h0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 14h9.5a3.75 3.75 0 0 1 3.75 3.75a3.75 3.75 0 0 1-3.75 3.75h-9.5a3.75 3.75 0 0 1-3.75-3.75A3.75 3.75 0 0 1 7.25 14M7 2.5V14m3.5-11.5V14M14 2.5V14m3.5-11.5V14");
}
</style><path class="kxq5i0h0a"/>`,
		"fallback": "uix:comb-pick",
	});
}

export default Component;
