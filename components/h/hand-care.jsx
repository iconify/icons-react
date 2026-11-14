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
		"content": `<style>.b00afka8g {
  d: path("M8 21.5V19l-3.25-4.75c-.75-1-.5-2 .25-2.5s1.75-.25 2.25.75L8.5 14V5.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V11V4c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v7v-5.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v6V8c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v7c0 3-2 4.5-3.5 4.5v2");
}

.f6w4qskpg {
  fill: currentColor;
  d: path("M13.75 12.5c1 1.25 1.75 2 1.75 3s-.75 1.75-1.75 1.75S12 16.5 12 15.5s.75-1.75 1.75-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b00afka8g"/><path class="f6w4qskpg"/></g>`,
		"fallback": "uix-sharp:hand-care",
	});
}

export default Component;
