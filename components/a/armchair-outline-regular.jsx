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
		"content": `<style>.hhn28yosy {
  d: path("M21 20v-8h-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1cfkyb_k {
  d: path("M3 20v-8h4");
}

.xm60vxbgs {
  d: path("M7 16V5h10v11");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="xm60vxbgs"/><path class="ys-dg812g"/><path class="q1cfkyb_k"/><path class="hhn28yosy"/></g>`,
		"fallback": "iconmind:armchair-outline-regular",
	});
}

export default Component;
