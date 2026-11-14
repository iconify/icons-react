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
		"content": `<style>.xg7acnb1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18m8-18v18m8-18v18M3.25 12a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm8 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm8 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM2 12h2m3.25 0h1.5m6.5 0h1.5M20 12h2");
}
</style><path class="xg7acnb1b"/>`,
		"fallback": "uix-sharp:calibration-session",
	});
}

export default Component;
