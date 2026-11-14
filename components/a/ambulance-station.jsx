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

.lecftlb5j {
  d: path("M6.5 20.5v-5h11v5M12 8.25v4.5M9.75 10.5h4.5");
}

.lw4gphb1q {
  d: path("M2.5 20.5v-12L12 4l9.5 4.5v12Z");
}
</style><g class="hntgybcog"><path class="lw4gphb1q"/><path class="lecftlb5j"/></g>`,
		"fallback": "uix:ambulance-station",
	});
}

export default Component;
