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
		"content": `<style>.bkd9t9_ww {
  d: path("M3 21v-7h4V8h10v6h4v7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uvgrx_yvv {
  d: path("M12 3v5");
}
</style><g class="s0phu2bbs"><path class="bkd9t9_ww"/><path class="uvgrx_yvv"/></g>`,
		"fallback": "iconmind:birthday-reward-outline-bold",
	});
}

export default Component;
