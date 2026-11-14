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
		"content": `<style>.d-hjvybtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18A3.25 3.25 0 1 0 9 18a3.25 3.25 0 1 0-6.5 0m11.019-1.3q-.168.072-.324.167t-.296.213t-.262.253t-.223.289q-.101.152-.178.318q-.078.165-.13.341q-.053.175-.079.355Q12 18.817 12 19q0 .244.047.484q.048.24.141.466t.227.43t.307.377M5.75 14.75L8 3.5m-2.5 0h5M9 17.5h3.5m3 4c0-4.5 2-6.5 6-6.5c0 4.5-2 6.5-6 6.5m0 0l3.25-3.25");
}
</style><path class="d-hjvybtj"/>`,
		"fallback": "uix:eco-scooter",
	});
}

export default Component;
