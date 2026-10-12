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
		"content": `<style>.lrugtxbxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75v18.5m16.5-18.5v18.5M9 5.75h6v12.5H9z");
}
</style><path class="lrugtxbxm"/>`,
		"fallback": "iconoven:distribute-horizontal-sharp",
	});
}

export default Component;
