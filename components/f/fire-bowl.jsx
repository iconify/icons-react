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
		"content": `<style>.g-dkdbc1m {
  d: path("m9.5 18.25l-1 3.25h7l-1-3.25M8.5 13c-1.75-3-.25-5.5 1.5-7c0 2 1 3 2.25 3.25C11.5 6.5 12.5 4 15 2.5c-.25 3 2.75 6 .75 10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmix8fb2m {
  d: path("M3.5 13h17a8.5 5.5 0 0 1-17 0");
}
</style><g class="hntgybcog"><path class="xmix8fb2m"/><path class="g-dkdbc1m"/></g>`,
		"fallback": "uix:fire-bowl",
	});
}

export default Component;
