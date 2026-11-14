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
		"content": `<style>.qqipvh25z {
  d: path("M16 9a4 4 0 0 1-4 4m0-4h4");
}

.sb3kunsea {
  d: path("M3 3h18v18H3Zm9 0v6m0 4v8m-9-9h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sb3kunsea"/><path class="qqipvh25z"/></g>`,
		"fallback": "uix-sharp:floor-plan-view",
	});
}

export default Component;
