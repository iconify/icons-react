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
		"content": `<style>.lffypfblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.94 11.39l1.62-2.28Q8 8.5 8.75 8.5h6.5q.75 0 1.19.61l1.62 2.28q.44.61-.31.61H6.25q-.75 0-.31-.61M3.75 12h16.5q1 0 .68.95l-.36 1.1q-.32.95-1.32.95H4.75q-1 0-1.32-.95l-.36-1.1q-.32-.95.68-.95m-.5 7c1.5 0 1.5-1 3-1s1.5 1 3 1s1.5-1 3-1s1.5 1 3 1s1.5-1 3-1s1.5 1 3 1");
}
</style><path class="lffypfblq"/>`,
		"fallback": "iconoven:barge",
	});
}

export default Component;
