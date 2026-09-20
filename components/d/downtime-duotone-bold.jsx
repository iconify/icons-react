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
		"content": `<style>.bjdq34bim {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h4V6h4v12h4v-6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hen7e0d7r {
  d: path("M3 12h4V6h4v12h4v-6h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bjdq34bim"/><path class="hen7e0d7r"/></g>`,
		"fallback": "iconmind:downtime-duotone-bold",
	});
}

export default Component;
