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
		"content": `<style>.h4hd0zj7k {
  d: path("M5.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.u3dosnb-c {
  d: path("M3 21.5v-2c0-3 2-4.75 5-5.25v-3.5m4 0v3.5q.959.16 1.768.488M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4hd0zj7k"/><path class="u3dosnb-c"/></g>`,
		"fallback": "uix-sharp:head-locked",
	});
}

export default Component;
