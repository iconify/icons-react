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
		"content": `<style>.ncarcz5rt {
  d: path("M15.75 17v4.5h5V17");
}

.skzvk2bcj {
  d: path("M3 8v10m0-4h5.5V9.75M6.418 2.458l12.216 4.446l-2.052 5.638L4.366 8.096ZM15.25 8.75h.01M14.75 18l3.5-3.25l3.5 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="skzvk2bcj"/><path class="ncarcz5rt"/></g>`,
		"fallback": "uix-sharp:cctv-hotel",
	});
}

export default Component;
