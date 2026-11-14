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
		"content": `<style>.spnu-rbaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5L10.25 4a1.75 1.75 0 0 1 3.5 0L16 21.5ZM9.75 8h4.5m-5 3h5.5m-6 4h6.5M8.5 18h7");
}
</style><path class="spnu-rbaq"/>`,
		"fallback": "uix:air-race-pylon",
	});
}

export default Component;
