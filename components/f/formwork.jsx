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
		"content": `<style>.eykdddbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4za1.5 1.5 0 0 1 1.5 1.5V16A1.5 1.5 0 0 1 7 17.5A1.5 1.5 0 0 1 5.5 16V5.5A1.5 1.5 0 0 1 7 4m10 0za1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 1 17 4M4.25 17.5h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 21H4.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M3 8h18");
}
</style><path class="eykdddbee"/>`,
		"fallback": "uix:formwork",
	});
}

export default Component;
