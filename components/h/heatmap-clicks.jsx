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
		"content": `<style>.c8q853jwq {
  d: path("M13.8 21.5H3.5v-19h17v10.8m0 6.3v1.9h-1.3M3.5 7h17m-17 4.75h6.9m6.5 0h3.6m-17 4.75h8.6M9.25 7v14.5M14.75 7v3.8");
}

.nsx2w7spa {
  fill: currentColor;
  d: path("M3.5 7h5.75v4.75H3.5Zm6.9 4.75H9.25V7h5.5v3.8");
}

.qycmtzbnw {
  d: path("m14 13.5l6.75 3l-3 1.25l-1.25 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8q853jwq"/><path class="nsx2w7spa"/><path class="qycmtzbnw"/></g>`,
		"fallback": "uix-sharp:heatmap-clicks",
	});
}

export default Component;
