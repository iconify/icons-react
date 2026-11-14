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
		"content": `<style>.nvagd-bif {
  d: path("M7.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm6.039-4.229l1.026-2.819");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y02u40its {
  d: path("M2.5 15q2.5-1.75 5 0H10m4 0h2.5q2.5 1.75 5 0M7.771 9.461l8.458 3.078M6.5 18.75q5.5 3 11 0");
}
</style><g class="ulnmmdpxh"><path class="nvagd-bif"/><path class="y02u40its"/></g>`,
		"fallback": "uix-sharp:fish-bite",
	});
}

export default Component;
