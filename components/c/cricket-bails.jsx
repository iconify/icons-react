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
		"content": `<style>.t1q5gorbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7v14.5M12 7v14.5M17 7v14.5M6 4h4.5m3 0H18");
}
</style><path class="t1q5gorbd"/>`,
		"fallback": "uix:cricket-bails",
	});
}

export default Component;
