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

.idtt80hqt {
  d: path("M5.42 11.61a7 7 0 0 1 13.16 0");
}

.xj9_gsbwr {
  d: path("M2.6 10.58a10 10 0 0 1 18.8 0");
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="zoz5ar7wf"/><path class="idtt80hqt"/><path class="xj9_gsbwr"/></g>`,
		"fallback": "iconmind:current-location-outline-thin",
	});
}

export default Component;
