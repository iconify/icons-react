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

.l3hhi3ouz {
  d: path("M6.5 4L12 8l5.5-4");
}

.tei-8sbpw {
  d: path("M2.5 12v7a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7");
}

.w9a9h745d {
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625v4.25a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 6 9.875v-4.25A2.625 2.625 0 0 1 8.625 3");
}
</style><g class="hntgybcog"><path class="tei-8sbpw"/><path class="w9a9h745d"/><path class="l3hhi3ouz"/></g>`,
		"fallback": "uix:email-quarantine",
	});
}

export default Component;
