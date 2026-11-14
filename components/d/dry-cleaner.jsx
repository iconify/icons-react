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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6vqnjbkw {
  d: path("M5.597 9.5h12.806a1.75 1.75 0 0 1 1.722 2.063l-1.364 7.5a1.75 1.75 0 0 1-1.722 1.437H6.961a1.75 1.75 0 0 1-1.722-1.437l-1.364-7.5A1.75 1.75 0 0 1 5.597 9.5");
}

.ym-y82b5m {
  d: path("M6.5 9.5c0-4.5 4-5.5 6-3.5c2-1.5 5.5-.5 5 3.5m-8.75 3v5m3.25-5v5m3.25-5v5");
}
</style><g class="hntgybcog"><path class="i6vqnjbkw"/><path class="ym-y82b5m"/></g>`,
		"fallback": "uix:dry-cleaner",
	});
}

export default Component;
