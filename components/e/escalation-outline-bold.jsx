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
		"content": `<style>.ext7qtobs {
  d: path("M3 19h5v-5h5V9h6");
}

.ia95t8sod {
  d: path("m16 6 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ext7qtobs"/><path class="ia95t8sod"/></g>`,
		"fallback": "iconmind:escalation-outline-bold",
	});
}

export default Component;
