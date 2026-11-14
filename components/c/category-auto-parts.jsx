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
		"content": `<style>.b28rrzbgr {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.dy17648oc {
  fill: currentColor;
  d: path("M8.25 9a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm6 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm-6 6a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm6 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.dy4cmmk2o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="dy4cmmk2o"/><path class="b28rrzbgr"/><path class="dy17648oc"/></g>`,
		"fallback": "uix-sharp:category-auto-parts",
	});
}

export default Component;
