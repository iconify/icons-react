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
		"content": `<style>.bywjbpn-g {
  d: path("m10.083 3.346l2.69-.572a1.375 1.375 0 0 1 1.631 1.059a1.375 1.375 0 0 1-1.059 1.631l-2.69.572a1.375 1.375 0 0 1-1.631-1.059a1.375 1.375 0 0 1 1.059-1.631M4 21.5c0-3.75 3.5-5.75 8-5.75q.286 0 .565.011m7.556.118l-4.596 4.596m-.177-4.066l3.359.884l.884 3.359m-4.773-1.238l1.768 1.768");
}

.cudpy66uo {
  d: path("M8.5 9.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cudpy66uo"/><path class="bywjbpn-g"/></g>`,
		"fallback": "uix:flight-attendant",
	});
}

export default Component;
