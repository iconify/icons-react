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
		"content": `<style>.cbn_tbceq {
  d: path("m7 7l3.5 4l3-2l6 7");
}

.ew9xmvlqg {
  d: path("M15.5 16h4v-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="cbn_tbceq"/><path class="ew9xmvlqg"/></g>`,
		"fallback": "uix:chart-line-down",
	});
}

export default Component;
