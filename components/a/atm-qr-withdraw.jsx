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
		"content": `<style>.a1rm80_0k {
  d: path("M16.75 18.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.cpw0nx0ht {
  d: path("M5.188 3h1.625A2.19 2.19 0 0 1 9 5.188v1.625A2.19 2.19 0 0 1 6.813 9H5.188A2.19 2.19 0 0 1 3 6.813V5.188A2.19 2.19 0 0 1 5.188 3m12 0h1.625A2.19 2.19 0 0 1 21 5.188v1.625A2.19 2.19 0 0 1 18.813 9h-1.625A2.19 2.19 0 0 1 15 6.813V5.188A2.19 2.19 0 0 1 17.188 3m-12 12h1.625A2.19 2.19 0 0 1 9 17.188v1.625A2.19 2.19 0 0 1 6.813 21H5.188A2.19 2.19 0 0 1 3 18.813v-1.625A2.19 2.19 0 0 1 5.188 15M6 6h.01M18 6h.01M6 18h.01M12 4h.01M12 8h.01M4 12h.01M8 12h.01M12 12h.01M16 12h.01M20 12h.01m-4.26 3.75h4.5A1.75 1.75 0 0 1 22 17.5v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 14 19.5v-2a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cpw0nx0ht"/><path class="a1rm80_0k"/></g>`,
		"fallback": "uix:atm-qr-withdraw",
	});
}

export default Component;
