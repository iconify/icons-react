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
		"content": `<style>.g_aijtb5j {
  d: path("M7.5 20.5v-5h4v5M18 13c1.25 1.75 3.25 3.5 3.25 5.5a3.25 3.25 0 0 1-6.5 0c0-2 2-3.75 3.25-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.of5xo76ef {
  d: path("M12.272 20.5H2.5v-10L11 3l8.5 7.5v.128");
}
</style><g class="hntgybcog"><path class="of5xo76ef"/><path class="g_aijtb5j"/></g>`,
		"fallback": "uix:home-accidental-damage",
	});
}

export default Component;
