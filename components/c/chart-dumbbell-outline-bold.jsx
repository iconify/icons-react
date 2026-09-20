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
		"content": `<style>.jnysnpbhj {
  d: path("M17 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rynjb5q0q {
  d: path("M7 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.strt8mboj {
  d: path("M7 8h6");
}

.t-euypbap {
  d: path("M3 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.u3t8-bfcz {
  d: path("M13 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ws9v8zbhe {
  d: path("M11 16h6");
}
</style><g class="s0phu2bbs"><path class="t-euypbap"/><path class="u3t8-bfcz"/><path class="strt8mboj"/><path class="rynjb5q0q"/><path class="jnysnpbhj"/><path class="ws9v8zbhe"/></g>`,
		"fallback": "iconmind:chart-dumbbell-outline-bold",
	});
}

export default Component;
