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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvh38acgw {
  d: path("M8.25 4.5h7.5A5.25 5.25 0 0 1 21 9.75v4.5a5.25 5.25 0 0 1-5.25 5.25h-7.5A5.25 5.25 0 0 1 3 14.25v-4.5A5.25 5.25 0 0 1 8.25 4.5");
}

.sam9f8bey {
  d: path("M5.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-10 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="qvh38acgw"/><path class="sam9f8bey"/></g>`,
		"fallback": "uix:contraceptive-pill",
	});
}

export default Component;
