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

.hyjon0btb {
  d: path("M10 3L5 21");
}

.m-5zcvb8c {
  d: path("M20 16H2");
}

.s41he0bba {
  d: path("M22 9H4");
}

.t1in8db2h {
  d: path("M19 3L14 21");
}
</style><g class="hntgybcog"><path class="hyjon0btb"/><path class="t1in8db2h"/><path class="s41he0bba"/><path class="m-5zcvb8c"/></g>`,
		"fallback": "solar:hashtag-linear",
	});
}

export default Component;
