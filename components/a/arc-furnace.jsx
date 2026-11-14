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
		"content": `<style>.aiaz2ro_g {
  d: path("m12.75 14l-1.5 2.25h1.5l-1.5 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhyy9gbtz {
  d: path("M3 11h18c0 6-4 10-9 10s-9-4-9-10Zm5.5-8.5v12m7-12v12");
}
</style><g class="ulnmmdpxh"><path class="zhyy9gbtz"/><path class="aiaz2ro_g"/></g>`,
		"fallback": "uix-sharp:arc-furnace",
	});
}

export default Component;
