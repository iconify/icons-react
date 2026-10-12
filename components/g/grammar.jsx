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
		"content": `<style>.yo7pq92rh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.25h18.5m-18.5 5h7.5m3 0h8m-18.5 9h12m-1.5-4.5l1.33-1.25l1.33 1.25l1.33-1.25l1.33 1.25l1.33-1.25l1.33 1.25");
}
</style><path class="yo7pq92rh"/>`,
		"fallback": "iconoven:grammar",
	});
}

export default Component;
