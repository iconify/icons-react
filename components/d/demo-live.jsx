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
		"content": `<style>.caltyil3h {
  d: path("M2.5 3.5h19V17h-19ZM12 17v3.5m-4 0h8");
}

.l2zi7xbsc {
  d: path("m9.5 6.5l5.75 3.75L9.5 14Zm9 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="caltyil3h"/><path class="l2zi7xbsc"/></g>`,
		"fallback": "uix-sharp:demo-live",
	});
}

export default Component;
