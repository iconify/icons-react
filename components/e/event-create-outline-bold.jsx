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
		"content": `<style>.c27cgq4un {
  d: path("M18 8v8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vsc_xuipx {
  d: path("M2 7h12v3l-2 2 2 2v3H2v-3l2 -2 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vsc_xuipx"/><path class="c27cgq4un"/><path class="jlfl_ccwj"/></g>`,
		"fallback": "iconmind:event-create-outline-bold",
	});
}

export default Component;
