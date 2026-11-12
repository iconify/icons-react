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

.qf8hzevjt {
  d: path("M6 9V18L15 18");
}

.rb5lbohlx {
  d: path("M18 6L6 18");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="rb5lbohlx"/><path class="qf8hzevjt"/></g>`,
		"fallback": "solar:arrow-left-down-line-duotone",
	});
}

export default Component;
