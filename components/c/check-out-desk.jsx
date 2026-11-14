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

.joiedb46c {
  d: path("M11.292 18.975L10.5 18.5L8 20l-2.25-1.5L3.5 20V2.5h14v9.7M7 7h7m-7 4h5m2 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="joiedb46c"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:check-out-desk",
	});
}

export default Component;
