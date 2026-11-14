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
		"content": `<style>.v_5a2ibjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 8h18M9.75 3v3m4.5-3v3");
}
</style><path class="v_5a2ibjg"/>`,
		"fallback": "uix:free-fall",
	});
}

export default Component;
