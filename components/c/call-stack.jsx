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
		"content": `<style>.vsfmwlblm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5h11.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 16.25 7H4.75A2.25 2.25 0 0 1 2.5 4.75A2.25 2.25 0 0 1 4.75 2.5m1.5 7.25h11.5A2.25 2.25 0 0 1 20 12a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 12a2.25 2.25 0 0 1 2.25-2.25M7.75 17h11.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H7.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 7.75 17");
}
</style><path class="vsfmwlblm"/>`,
		"fallback": "uix:call-stack",
	});
}

export default Component;
