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
		"content": `<style>.sh6_hobxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 16h19M3.5 7H5m3.25 0h1.5m4.5 0h1.5M19 7h1.5m-17 10H5m3.25 0h1.5m4.5 0h1.5M19 17h1.5m-18-5A2.25 2.25 0 1 0 7 12a2.25 2.25 0 1 0-4.5 0m7.25 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M17 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="sh6_hobxr"/>`,
		"fallback": "uix:film-colour",
	});
}

export default Component;
