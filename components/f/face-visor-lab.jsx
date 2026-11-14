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

.wpcn3sith {
  d: path("M7 7.5c0-3.25 2.25-5 5-5s5 1.75 5 5");
}

.xj6p9ubqe {
  d: path("M7 7.5q5-1.25 10 0a2 2 0 0 1 0 4q-5-1.25-10 0a2 2 0 0 1 0-4Zm0 4c0 3.25 2.25 5.25 5 5.25s5-2 5-5.25m-13 10q8-3.5 16 0");
}
</style><g class="ulnmmdpxh"><path class="wpcn3sith"/><path class="xj6p9ubqe"/></g>`,
		"fallback": "uix-sharp:face-visor-lab",
	});
}

export default Component;
