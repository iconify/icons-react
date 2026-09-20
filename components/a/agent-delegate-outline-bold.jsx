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
		"content": `<style>.crfmflbxb {
  d: path("m10 10 2.5 2.5");
}

.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.ih1xqsb_s {
  d: path("M11.5 14H14v-2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="s0phu2bbs"><path class="h7k_twb0c"/><path class="crfmflbxb"/><path class="ih1xqsb_s"/><path class="xb0ugqbkt"/></g>`,
		"fallback": "iconmind:agent-delegate-outline-bold",
	});
}

export default Component;
