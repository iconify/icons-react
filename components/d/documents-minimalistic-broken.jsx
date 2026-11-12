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
		"content": `<style>.dkgqo5bmm {
  d: path("M2 19V5");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jj9sgub3y {
  d: path("M9 13H15");
}

.lp-vx44ck {
  d: path("M19 16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V12M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V12");
}

.pa1nt9q2d {
  d: path("M22 19V5");
}

.rldmr4bdt {
  d: path("M9 17H12");
}

.sn70fibvm {
  d: path("M9 9H15");
}
</style><g class="ipq1z-bjh"><path class="jj9sgub3y"/><path class="sn70fibvm"/><path class="rldmr4bdt"/><path class="dkgqo5bmm"/><path class="pa1nt9q2d"/><path class="lp-vx44ck"/></g>`,
		"fallback": "solar:documents-minimalistic-broken",
	});
}

export default Component;
