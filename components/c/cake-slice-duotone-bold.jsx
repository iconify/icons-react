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
		"content": `<style>.ftphci-zo {
  fill: currentColor;
  d: path("M5 20v-8l6 -6h8v14Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nocp8rbgi {
  d: path("M5 20v-8l6 -6h8v14Z");
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ykj7ebbjl {
  d: path("M7 10h12");
}
</style><g class="s0phu2bbs"><path class="ftphci-zo"/><path class="nocp8rbgi"/><path class="ykj7ebbjl"/><path class="oqj-o0b2r"/></g>`,
		"fallback": "iconmind:cake-slice-duotone-bold",
	});
}

export default Component;
