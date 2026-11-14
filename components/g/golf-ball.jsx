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
		"content": `<style>.q268ak7kr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.25a7 7 0 1 0 14 0a7 7 0 1 0-14 0M8.5 19h7M12 19v2.5m-3.25-12h.01M12 7.75h.01m3.24 1.75h.01m-5.01 3.25h.01m3.49 0h.01");
}
</style><path class="q268ak7kr"/>`,
		"fallback": "uix:golf-ball",
	});
}

export default Component;
