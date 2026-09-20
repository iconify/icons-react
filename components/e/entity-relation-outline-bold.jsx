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
		"content": `<style>.bb7inz33j {
  d: path("M13.5 5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.e_3sagvyd {
  d: path("M13.5 16a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.l8l7-n69m {
  d: path("M11 12v5.5h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wjt99f33m {
  d: path("M8.5 12H11V6.5h2.5");
}

.ztwbs-b3m {
  d: path("M2 9a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="ztwbs-b3m"/><path class="bb7inz33j"/><path class="e_3sagvyd"/><path class="wjt99f33m"/><path class="l8l7-n69m"/></g>`,
		"fallback": "iconmind:entity-relation-outline-bold",
	});
}

export default Component;
