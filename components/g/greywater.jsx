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
		"content": `<style>.z-307mfom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17a9 4.5 0 1 0 18 0a9 4.5 0 1 0-18 0m6-1.25v2.5m3-3v3.5m3-3v2.5M12 2.5c2 1.75 3 3 3 4a3 3 0 0 1-6 0c0-1 1-2.25 3-4");
}
</style><path class="z-307mfom"/>`,
		"fallback": "uix:greywater",
	});
}

export default Component;
