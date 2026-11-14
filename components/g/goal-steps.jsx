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
		"content": `<style>.lwvgrhbci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h4.5V16H12v-4.5h4.5V7h2m0 0V3.5m.914.406l.211.094a.547.547 0 0 1 0 1l-.211.094A.65.65 0 0 1 18.5 4.5a.65.65 0 0 1 .914-.594");
}
</style><path class="lwvgrhbci"/>`,
		"fallback": "uix:goal-steps",
	});
}

export default Component;
