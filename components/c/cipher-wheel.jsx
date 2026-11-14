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
		"content": `<style>.ujghi5bts {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4-9.5v2.75m0 13.5v2.75m2.25-12.75l1.5-2m-6 8.5l-1.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ujghi5bts"/></g>`,
		"fallback": "uix-sharp:cipher-wheel",
	});
}

export default Component;
