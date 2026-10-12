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
		"content": `<style>.z16061b9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h4m.75-4H12q.75 0 .75.75v.5q0 .75.75.75h2q.75 0 .75.75v2.5q0 .75-.75.75h-2q-.75 0-.75.75v.5q0 .75-.75.75H7.5q-.75 0-.75-.75v-6.5q0-.75.75-.75m2.25 0v8m6.5-4h2a3 3 0 0 1 3 3v6.25");
}
</style><path class="z16061b9e"/>`,
		"fallback": "iconoven:coax-cable",
	});
}

export default Component;
