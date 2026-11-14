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

.it807pb0x {
  d: path("M4.25 18.5a2.75 2.25 0 1 0 5.5 0a2.75 2.25 0 1 0-5.5 0m10-2a2.75 2.25 0 1 0 5.5 0a2.75 2.25 0 1 0-5.5 0");
}

.tn-mz5b2h {
  d: path("M9.75 18.5v-14l10-2v14");
}
</style><g class="hntgybcog"><path class="it807pb0x"/><path class="tn-mz5b2h"/></g>`,
		"fallback": "uix:beamed-notes",
	});
}

export default Component;
