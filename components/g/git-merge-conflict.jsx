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
		"content": `<style>.e29nklb8v {
  d: path("M6 7v.5c0 3 6 2 6 5M18 7v.5c0 3-6 2-6 5M9.75 16l4.5 4.5m0-4.5l-4.5 4.5");
}

.hynmr1k3e {
  d: path("M3.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm12 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hynmr1k3e"/><path class="e29nklb8v"/></g>`,
		"fallback": "uix-sharp:git-merge-conflict",
	});
}

export default Component;
