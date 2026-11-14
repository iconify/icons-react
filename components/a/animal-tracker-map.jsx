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
		"content": `<style>.i--be7e4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.888 14.463L8 12.5l-5.5 2V6L8 4l6 2l5.5-2v8.5l-.724.263m-2.632.957l-.752.274M8 4v8.5M14 6v8.4m1.75 5.85a2.5 1.25 0 1 0 5 0a2.5 1.25 0 1 0-5 0m-.25-3.5h.01m2.74-1.25h.01M21 16.75h.01");
}
</style><path class="i--be7e4d"/>`,
		"fallback": "uix:animal-tracker-map",
	});
}

export default Component;
