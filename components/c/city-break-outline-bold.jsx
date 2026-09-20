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
		"content": `<style>.j3g0obcgt {
  d: path("M13 21V4h6v17");
}

.m_ifpmwzr {
  d: path("M4 12h6");
}

.n36352b2b {
  d: path("M4 21V8h6v13");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w-c31ggft {
  d: path("M13 9h6");
}
</style><g class="s0phu2bbs"><path class="n36352b2b"/><path class="j3g0obcgt"/><path class="m_ifpmwzr"/><path class="w-c31ggft"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:city-break-outline-bold",
	});
}

export default Component;
