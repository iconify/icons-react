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

.xhb4q_tse {
  d: path("m10 7 -5 5 5 5");
}

.zhmw1tbis {
  d: path("M18.69 8.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="xhb4q_tse"/><path class="zhmw1tbis"/></g>`,
		"fallback": "iconmind:agent-back-outline-thin",
	});
}

export default Component;
