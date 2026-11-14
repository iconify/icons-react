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
		"content": `<style>.lqjkfabhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4h9.649A1.348 1.348 0 0 1 17.5 6.125l-.766 1.085a1.75 1.75 0 0 0 .03 2.059l.736.981a1.25 1.25 0 0 1-1 2H6.75A1.75 1.75 0 0 1 5 10.5V5.75A1.75 1.75 0 0 1 6.75 4M5 3v18m13.441-5.107l.092.186a1.5 1.5 0 0 0 1.129.821l.205.03a.492.492 0 0 1 .273.838l-.149.145a1.5 1.5 0 0 0-.431 1.328l.035.204a.492.492 0 0 1-.713.519l-.184-.097a1.5 1.5 0 0 0-1.396 0l-.184.097a.492.492 0 0 1-.713-.519l.035-.204a1.5 1.5 0 0 0-.431-1.328l-.149-.145a.492.492 0 0 1 .273-.838l.205-.03a1.5 1.5 0 0 0 1.129-.821l.092-.186a.492.492 0 0 1 .882 0");
}
</style><path class="lqjkfabhc"/>`,
		"fallback": "uix:flag-star",
	});
}

export default Component;
