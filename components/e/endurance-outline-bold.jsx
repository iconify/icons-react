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
		"content": `<style>.cmt-chbtl {
  d: path("m2 20 6 -6 3 3 4 -4 7 7");
}

.iwanrcb5f {
  d: path("M15 13V5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s97tcsbyl {
  d: path("M15 5h4v4h-4");
}
</style><g class="s0phu2bbs"><path class="cmt-chbtl"/><path class="iwanrcb5f"/><path class="s97tcsbyl"/></g>`,
		"fallback": "iconmind:endurance-outline-bold",
	});
}

export default Component;
