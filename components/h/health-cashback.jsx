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
		"content": `<style>.cpbeccbyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.694 17.806L12 19.5L4.5 12c-2-2-2-5.5.75-7c2.5-1.25 5.25-.5 6.75 2c1.5-2.5 4.25-3.25 6.75-2c2.587 1.411 2.74 4.591 1.085 6.628m-.085 4.622C19.5 15.5 18.9 15 18 15c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M18 13.75V15m0 6v1");
}
</style><path class="cpbeccbyc"/>`,
		"fallback": "uix:health-cashback",
	});
}

export default Component;
