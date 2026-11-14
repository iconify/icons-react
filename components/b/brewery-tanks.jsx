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
		"content": `<style>.x2hq5mbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16V8a3.5 3.5 0 0 1 7 0v8Zm1.5 0v4.5m4-4.5v4.5M14 16V8a3.5 3.5 0 0 1 7 0v8Zm1.5 0v4.5m4-4.5v4.5M10 12h4M3 8h7m4 0h7");
}
</style><path class="x2hq5mbgx"/>`,
		"fallback": "uix:brewery-tanks",
	});
}

export default Component;
