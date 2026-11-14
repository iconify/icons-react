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

.mrwnyta9z {
  d: path("M7.25 9h2.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 9.75 15h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 7.25 9");
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}

.ytjr9nb1j {
  d: path("M6.75 12L8 13.25l2.25-2.5M14 12h4.5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="mrwnyta9z"/><path class="ytjr9nb1j"/></g>`,
		"fallback": "uix:captcha",
	});
}

export default Component;
