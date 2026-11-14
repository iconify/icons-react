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
		"content": `<style>.gf2pi-b5z {
  d: path("M6.5 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.gi0cnvkkn {
  d: path("M2.5 4h19v16h-19Zm0 7.5h19m-9.5 0V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gi0cnvkkn"/><path class="gf2pi-b5z"/></g>`,
		"fallback": "uix-sharp:curling-scoreboard",
	});
}

export default Component;
