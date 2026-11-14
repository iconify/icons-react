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
		"content": `<style>.grlkcu0bg {
  d: path("M17.471 14.464a6 6 0 1 1-7.935-7.935");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrgl4jfzx {
  d: path("M14.471 17.464a6 6 0 1 1-7.935-7.935M13.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.v3ft4eaog {
  d: path("M9 9a6 6 0 1 0 12 0A6 6 0 1 0 9 9");
}
</style><g class="hntgybcog"><path class="v3ft4eaog"/><path class="grlkcu0bg"/><path class="lrgl4jfzx"/></g>`,
		"fallback": "uix:cd-stack",
	});
}

export default Component;
