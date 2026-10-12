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
		"content": `<style>.sk2s3cbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.75h18.5c0 4.75-3.75 8.5-8.25 8.5h-2c-4.5 0-8.25-3.75-8.25-8.5m2 3.25h14.5M9 18.25l-.5 3h7l-.5-3");
}
</style><path class="sk2s3cbet"/>`,
		"fallback": "iconoven:bowl",
	});
}

export default Component;
