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
		"content": `<style>.ha190wb6v {
  d: path("M10 8V4h4v4");
}

.i_bq1yb3z {
  d: path("M8 8v12h8V8Z");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="i_bq1yb3z"/><path class="ha190wb6v"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:hydration-alert-outline-bold",
	});
}

export default Component;
