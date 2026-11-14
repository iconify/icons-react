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
		"content": `<style>.das_gvbvj {
  d: path("m6.5 8.75l.841.36a1.5 1.5 0 0 1 .909 1.379v4.682a.499.499 0 0 1-.875.329a1.163 1.163 0 0 0-1.75 0a.499.499 0 0 1-.875-.329V9.904A1.255 1.255 0 0 1 6.5 8.75M11.75 10h.5a1.5 1.5 0 0 1 1.5 1.5v4.671a.499.499 0 0 1-.875.329a1.163 1.163 0 0 0-1.75 0a.499.499 0 0 1-.875-.329V11.5a1.5 1.5 0 0 1 1.5-1.5m4.909-.89l.841-.36a1.255 1.255 0 0 1 1.75 1.154v5.267a.499.499 0 0 1-.875.329a1.163 1.163 0 0 0-1.75 0a.499.499 0 0 1-.875-.329v-4.682a1.5 1.5 0 0 1 .909-1.379");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr_b4cbgv {
  d: path("M2.5 7q9.5 6 19 0");
}
</style><g class="hntgybcog"><path class="nr_b4cbgv"/><path class="das_gvbvj"/></g>`,
		"fallback": "uix:bunting",
	});
}

export default Component;
