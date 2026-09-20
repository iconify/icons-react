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
		"content": `<style>.f7p-qpb9c {
  d: path("m3 12 7 -7 7 7");
}

.j_t6_obaj {
  d: path("M18.5 13.5 16 16l2.5 2.5");
}

.lveb61hbp {
  d: path("M16 16h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rfp-q_b_z {
  d: path("M5 12v8h10v-8");
}
</style><g class="nrj6p8qat"><path class="f7p-qpb9c"/><path class="rfp-q_b_z"/><path class="lveb61hbp"/><path class="j_t6_obaj"/></g>`,
		"fallback": "iconmind:home-return-outline-regular",
	});
}

export default Component;
