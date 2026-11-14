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
		"content": `<style>.d-ze93crs {
  d: path("M8.25 18.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ucatdgbji {
  d: path("M11 15.75h1.5a2.75 2.75 0 0 1 0 5.5H11");
}

.x0n0kebpl {
  d: path("M5.584 19.898q-.295-.063-.584-.148q-.214-.667-.322-1.358T4.57 17q0-.7.108-1.392q.108-.691.322-1.358q-.214-.667-.322-1.358T4.57 11.5t.108-1.392T5 8.75q-.214-.667-.322-1.358T4.57 6t.108-1.392T5 3.25q.548-.161 1.113-.242q.566-.081 1.137-.081t1.137.081T9.5 3.25q.548-.161 1.113-.242q.566-.081 1.137-.081t1.137.081q.565.081 1.113.242q.548-.161 1.113-.242q.566-.081 1.137-.081t1.137.081q.565.081 1.113.242q.214.667.322 1.358T18.93 6t-.108 1.392T18.5 8.75q.214.667.322 1.358t.108 1.392t-.108 1.392t-.322 1.358q.214.667.322 1.358T18.93 17q0 .7-.108 1.392q-.108.691-.322 1.358q-.289.085-.584.148M8.5 8H15m-6.5 3.5H15");
}
</style><g class="hntgybcog"><path class="x0n0kebpl"/><path class="d-ze93crs"/><path class="ucatdgbji"/></g>`,
		"fallback": "uix:deposit-bank-bonds",
	});
}

export default Component;
