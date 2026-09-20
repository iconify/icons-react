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
		"content": `<style>.crp-16bgl {
  d: path("M14 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h5");
}

.ctc5-4b5p {
  d: path("M9.5 9a2.5 2.5 0 1 1 2.5 2.5");
}

.eylqpv51p {
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twq9f2bsx {
  fill: currentColor;
  d: path("M14 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x7kl1kqgv {
  fill: currentColor;
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="twq9f2bsx"/><path class="x7kl1kqgv"/><path class="crp-16bgl"/><path class="yomctlb4k"/><path class="ctc5-4b5p"/><path class="eylqpv51p"/></g>`,
		"fallback": "iconmind:elicitation-duotone-thin",
	});
}

export default Component;
