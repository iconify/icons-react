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
		"content": `<style>.h1if8ni6j {
  d: path("M3 16.5v2a9 2.5 0 0 0 18 0v-2m-5-5.25l-9-6m-.875-1.375l-.11-.173a1.004 1.004 0 0 0-1.64-.077a.827.827 0 0 0 .536 1.327l.476.068a.75.75 0 0 0 .738-1.145M8 11.25l9-6m.875-1.375l.11-.173a1.004 1.004 0 0 1 1.64-.077a.827.827 0 0 1-.536 1.327l-.476.068a.75.75 0 0 1-.738-1.145");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uypufqbjy {
  d: path("M3 16.5a9 2.5 0 1 0 18 0a9 2.5 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="uypufqbjy"/><path class="h1if8ni6j"/></g>`,
		"fallback": "uix:drum-brushes",
	});
}

export default Component;
