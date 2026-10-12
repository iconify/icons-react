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
		"content": `<style>.bwfh0gvgc {
  cx: 5.75px;
  cy: 18px;
  r: 2.75px;
}

.kf4_wby4k {
  d: path("M7.43 15.82L10 12.5h3.25m-3.25 0l-.75-3M8 9.5h2.5m7.75 4v3m-5-8.25h7.5v5.25h-7.5z");
}

.osdeuxbhk {
  cx: 18.25px;
  cy: 18.75px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kf4_wby4k"/><circle class="bwfh0gvgc"/><circle class="osdeuxbhk"/></g>`,
		"fallback": "iconoven:cargo-bike-sharp",
	});
}

export default Component;
