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

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wqz016ggj {
  d: path("M9 8.5h5v4H9");
}

.y_ry8fr9v {
  d: path("M9 7.5v6");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="t5v_djbzx"/><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="y_ry8fr9v"/><path class="wqz016ggj"/></g>`,
		"fallback": "iconmind:canary-prompt-duotone-thin",
	});
}

export default Component;
