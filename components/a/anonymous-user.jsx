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
		"content": `<style>.lhccv-bki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 13c0-3.5 3-6 7-6s7 2.5 7 6m.25-6.75A2.5 2.5 0 1 1 20.5 16c-.75.5-1.25 1-1.25 2m0 2.75h.01");
}
</style><path class="lhccv-bki"/>`,
		"fallback": "uix:anonymous-user",
	});
}

export default Component;
