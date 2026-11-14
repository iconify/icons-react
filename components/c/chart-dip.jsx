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

.hp8snaceo {
  fill: currentColor;
  d: path("M10 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.iac65qc8y {
  d: path("M12 17.5v4m-2-2l2 2l2-2");
}

.w6tq9zu6e {
  d: path("M2.5 4C6 4 8.5 14 12 14s6-10 9.5-10");
}
</style><g class="hntgybcog"><path class="w6tq9zu6e"/><path class="hp8snaceo"/><path class="iac65qc8y"/></g>`,
		"fallback": "uix:chart-dip",
	});
}

export default Component;
