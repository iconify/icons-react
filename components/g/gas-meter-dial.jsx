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
		"content": `<style>.poyz6yvma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0M9 17.25v4.25m6-4.25v4.25M12 3v2.25M4.5 10.5h2.25m12.75 0h-2.25m-5.25 0L15.5 7M12 10.5h.01");
}
</style><path class="poyz6yvma"/>`,
		"fallback": "uix:gas-meter-dial",
	});
}

export default Component;
