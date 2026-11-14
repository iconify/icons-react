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
		"content": `<style>.jq3tvkr2d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.75 3.5q0-2.25 2.25-2.25t2.25 2.25T12 5.75T9.75 3.5m-3-.25Q4.5 3.25 4.5 5.5t2.25 2.25T9 5.5T6.75 3.25m10.5 0Q15 3.25 15 5.5t2.25 2.25T19.5 5.5t-2.25-2.25M1.75 10q0-2.25 2.25-2.25T6.25 10T4 12.25T1.75 10m16 0q0-2.25 2.25-2.25T22.25 10T20 12.25T17.75 10M6.947 11.87Q4.75 13.56 4.75 16t2.197 4.13Q9.053 21.75 12 21.75t5.053-1.62Q19.25 18.44 19.25 16t-2.197-4.13Q14.947 10.25 12 10.25t-5.053 1.62");
}
</style><path class="jq3tvkr2d"/>`,
		"fallback": "uix-solid:bear-paw-print",
	});
}

export default Component;
