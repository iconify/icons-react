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
		"content": `<style>.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1m4z10fj {
  d: path("M8 21v-4c0 -2 8 -2 8 0v4");
}

.ucf3ueb9q {
  fill: currentColor;
  d: path("M5 3v18h14V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ucf3ueb9q"/><path class="diipsobkl"/><path class="s1m4z10fj"/></g>`,
		"fallback": "iconmind:cat-flap-duotone-bold",
	});
}

export default Component;
