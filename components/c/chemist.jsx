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
		"content": `<style>.r4yd_u3lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.357 0 2.612.229 3.691.647M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M17 14v2.25a2.75 2.75 0 1 0 2 0V14");
}
</style><path class="r4yd_u3lo"/>`,
		"fallback": "uix:chemist",
	});
}

export default Component;
