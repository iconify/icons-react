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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.d3kpl_b4o {
  d: path("M5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ek759fs3g {
  d: path("M7 4v3");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.od769abab {
  d: path("M17 4v3");
}

.pj7ux4r4p {
  d: path("M15 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c7dgfu7wx"/><path class="ek759fs3g"/><path class="d3kpl_b4o"/><path class="od769abab"/><path class="pj7ux4r4p"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:event-stage-outline-bold",
	});
}

export default Component;
