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
		"content": `<style>.aqzwtl29x {
  d: path("M2.5 9h19v12.5h-19Zm2-3h15m-13-3h11");
}

.g0h4fbcxk {
  d: path("m10 12l5 3.25l-5 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aqzwtl29x"/><path class="g0h4fbcxk"/></g>`,
		"fallback": "uix-sharp:binge-watch",
	});
}

export default Component;
