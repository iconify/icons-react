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
		"content": `<style>.gxszgbcvh {
  d: path("M3 2.5h4v11H3Zm7 0h4v11h-4Zm7 0h4v11h-4Zm-12.5 14h15l-1.25 5H5.75ZM3 8h4m-4 2.5h4M10 8h4m-4 2.5h4M17 8h4m-4 2.5h4");
}

.sfmhoub9f {
  d: path("M9.5 18.75a2.5 1 0 1 0 5 0a2.5 1 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gxszgbcvh"/><path class="sfmhoub9f"/></g>`,
		"fallback": "uix-sharp:coin-dispenser",
	});
}

export default Component;
