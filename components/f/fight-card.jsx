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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hslmekbdq {
  d: path("M9 18.5H6V5h11v3");
}

.lungo_iau {
  d: path("M12.5 8h4a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 9 18v-6.5A3.5 3.5 0 0 1 12.5 8m-.5 4.5h5M12 17h3.5");
}

.mwuoesbdk {
  d: path("M6 15.5H3v-13h11V5");
}
</style><g class="hntgybcog"><path class="mwuoesbdk"/><path class="hslmekbdq"/><path class="lungo_iau"/></g>`,
		"fallback": "uix:fight-card",
	});
}

export default Component;
