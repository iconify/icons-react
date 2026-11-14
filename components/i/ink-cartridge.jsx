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
		"content": `<style>.ay_41p81m {
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v11.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 16.875V5.125A2.625 2.625 0 0 1 7.625 2.5M10 19.5v2h4v-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s21s-ccox {
  d: path("M12 7.5s3 3.5 3 5.5a3 3 0 0 1-6 0c0-2 3-5.5 3-5.5");
}
</style><g class="hntgybcog"><path class="ay_41p81m"/><path class="s21s-ccox"/></g>`,
		"fallback": "uix:ink-cartridge",
	});
}

export default Component;
