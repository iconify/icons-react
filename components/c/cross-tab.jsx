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
		"content": `<style>.g_82bym8k {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5V8H8v13H5.5A2.5 2.5 0 0 1 3 18.5Z");
}

.q2lca82dq {
  d: path("M21 8v10.5a2.5 2.5 0 0 1-2.5 2.5H8m6.5-13v13M8 14.5h13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g_82bym8k"/><path class="q2lca82dq"/></g>`,
		"fallback": "uix-sharp:cross-tab",
	});
}

export default Component;
