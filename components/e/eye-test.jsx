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

.l342qj1rt {
  d: path("M7.75 6.5h8.5a5.25 5.25 0 0 1 5.25 5.25v.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-.5A5.25 5.25 0 0 1 7.75 6.5");
}

.ldowgzbcl {
  d: path("M5 12a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 5 12m8.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 6.5v-3m-2.5 0h5m-2.5 14v3");
}
</style><g class="hntgybcog"><path class="l342qj1rt"/><path class="ldowgzbcl"/></g>`,
		"fallback": "uix:eye-test",
	});
}

export default Component;
