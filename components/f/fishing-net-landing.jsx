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
		"content": `<style>.ulcz-u44f {
  d: path("M3 7a6.5 3.5 0 1 0 13 0A6.5 3.5 0 1 0 3 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdqjytzem {
  d: path("M3 7.5C3.5 14 6.5 18 9.5 18s6-4 6.5-10.5m-.75 2.5L21 20.5m-11.5-10v7m-5-4.5h10");
}
</style><g class="ulnmmdpxh"><path class="ulcz-u44f"/><path class="zdqjytzem"/></g>`,
		"fallback": "uix-sharp:fishing-net-landing",
	});
}

export default Component;
