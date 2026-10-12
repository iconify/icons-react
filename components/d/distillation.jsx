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
		"content": `<style>.twij_qb_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75h16.5q1 0 .29.71l-5.83 5.83Q14 11 14 12v.25q0 1-1 1h-2q-1 0-1-1V12q0-1-.71-1.71L3.46 4.46q-.71-.71.29-.71M6.5 7h11M12 15.5c1.4 1.5 2.1 2.6 2.1 3.4a2.1 2.1 0 0 1-4.2 0c0-.8.7-1.9 2.1-3.4");
}
</style><path class="twij_qb_e"/>`,
		"fallback": "iconoven:distillation",
	});
}

export default Component;
