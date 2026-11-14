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
		"content": `<style>.f_3mxhbtw {
  d: path("M7 7.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcn3zob1g {
  d: path("M12 18.25c-2.5-4-9.5-4-9.5 0s7 4 9.5 0s9.5-4 9.5 0s-7 4-9.5 0");
}

.mzevxcbhm {
  fill: currentColor;
  d: path("m13.375 6.625l-.392.863a1.5 1.5 0 0 1-.745.745l-.863.392a.566.566 0 0 1-.75-.75l.392-.863a1.5 1.5 0 0 1 .745-.745l.863-.392a.566.566 0 0 1 .75.75");
}
</style><g class="hntgybcog"><path class="f_3mxhbtw"/><path class="mzevxcbhm"/><path class="lcn3zob1g"/></g>`,
		"fallback": "uix:compass-calibrate",
	});
}

export default Component;
