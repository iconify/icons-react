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
		"content": `<style>.fwchyyh_n {
  d: path("M4.5 8.5h15A1.5 1.5 0 0 1 21 10v4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 14v-4a1.5 1.5 0 0 1 1.5-1.5m3 0v7m4.5-7v7m2.25-3.5h.01");
}

.hj1kerbwv {
  fill: currentColor;
  d: path("M18 8.5h1.5A1.5 1.5 0 0 1 21 10v4a1.5 1.5 0 0 1-1.5 1.5H18a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 18 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fwchyyh_n"/><path class="hj1kerbwv"/></g>`,
		"fallback": "uix:darkroom-test-strip",
	});
}

export default Component;
