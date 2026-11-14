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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vz4k3dbhb {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm6-2.5h.01m6.99 0h.01");
}

.x22lu1_sn {
  d: path("M15.5 12.25s1.25 1.5 1.25 2.5a1.25 1.25 0 0 1-2.5 0c0-1 1.25-2.5 1.25-2.5Zm-7.5 5q1.125-1.5 3-1.5");
}
</style><g class="ulnmmdpxh"><path class="vz4k3dbhb"/><path class="x22lu1_sn"/></g>`,
		"fallback": "uix-sharp:emoji-cry",
	});
}

export default Component;
