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
		"content": `<style>.dwgw5dbul {
  d: path("M2.5 4.75L12 9.5l9.5-4.75");
}

.fd489bixb {
  d: path("M5 6v14.5h14V6");
}

.g2rfoob-o {
  d: path("M11.5 14.5h1A1.5 1.5 0 0 1 14 16v3a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-3a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dwgw5dbul"/><path class="fd489bixb"/><path class="g2rfoob-o"/></g>`,
		"fallback": "uix:butterfly-roof",
	});
}

export default Component;
