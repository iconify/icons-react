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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvgrx_yvv {
  d: path("M12 3v5");
}
</style><g class="hntgybcog"><path class="bkd9t9_ww"/><path class="uvgrx_yvv"/></g>`,
		"fallback": "iconmind:birthday-reward-outline-thin",
	});
}

export default Component;
