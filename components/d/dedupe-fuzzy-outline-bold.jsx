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
		"content": `<style>.isrkj8blm {
  d: path("M3 17h13");
}

.orxbg_b1j {
  d: path("M3 4h13");
}

.rdidnh2az {
  d: path("m10 11.5 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="s0phu2bbs"><path class="orxbg_b1j"/><path class="zuuudpbwi"/><path class="rdidnh2az"/><path class="isrkj8blm"/></g>`,
		"fallback": "iconmind:dedupe-fuzzy-outline-bold",
	});
}

export default Component;
