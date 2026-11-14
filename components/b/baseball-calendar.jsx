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
		"content": `<style>.okj1k4bkq {
  d: path("M3 4h18v17H3Zm5-1.5V6m8-3.5V6");
}

.q0e54nb2g {
  d: path("M7.5 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z31eszb8w {
  d: path("M9.5 10.5q1.5 3.5 0 7m5-7q-1.5 3.5 0 7");
}
</style><g class="ulnmmdpxh"><path class="okj1k4bkq"/><path class="q0e54nb2g"/><path class="z31eszb8w"/></g>`,
		"fallback": "uix-sharp:baseball-calendar",
	});
}

export default Component;
