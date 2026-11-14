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
		"content": `<style>.caed3i82z {
  d: path("M3.5 3v17.5h9.7");
}

.kwv8ry9mg {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-3 17v-7m-1.75 1.75L16 14.5l1.75 1.75M20 14.5v7m-1.75-1.75L20 21.5l1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="caed3i82z"/><path class="kwv8ry9mg"/></g>`,
		"fallback": "uix-sharp:chart-sort",
	});
}

export default Component;
