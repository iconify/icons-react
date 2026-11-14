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
		"content": `<style>.zn349yb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6.5h2.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6.5H22M12 9.75v7m3.031-5.25L8.969 15m6.062 0l-6.062-3.5");
}
</style><path class="zn349yb4h"/>`,
		"fallback": "uix:cold-chain-box",
	});
}

export default Component;
