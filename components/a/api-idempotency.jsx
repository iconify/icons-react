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
		"content": `<style>.elqassbsl {
  d: path("M10.5 6.5L12 8l-1.5 1.5");
}

.g3ta-0bxb {
  d: path("M13.5 14.5L12 16l1.5 1.5m-4.328-2.672A4 4 0 0 1 12 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtvi81ccy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5");
}

.tpaatkbuk {
  d: path("M14.828 9.172A4 4 0 0 1 12 16");
}
</style><g class="hntgybcog"><path class="mtvi81ccy"/><path class="tpaatkbuk"/><path class="g3ta-0bxb"/><path class="elqassbsl"/></g>`,
		"fallback": "uix:api-idempotency",
	});
}

export default Component;
