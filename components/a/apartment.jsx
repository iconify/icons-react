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

.ixv163bsh {
  d: path("M10 21v-4h4v4");
}

.x8u5o81yu {
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625v12.75A2.625 2.625 0 0 1 15.375 21h-6.75A2.625 2.625 0 0 1 6 18.375V5.625A2.625 2.625 0 0 1 8.625 3M9.5 7.5h1m3 0h1m-5 4h1m3 0h1");
}
</style><g class="hntgybcog"><path class="x8u5o81yu"/><path class="ixv163bsh"/></g>`,
		"fallback": "uix:apartment",
	});
}

export default Component;
