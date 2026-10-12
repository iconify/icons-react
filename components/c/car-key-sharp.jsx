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
		"content": `<style>.rlwrrxccy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75h8.5v11h-8.5zm2.25 4h4m-4 3h4m-2 4v7.5M12 17h2.25M12 20h2.25");
}
</style><path class="rlwrrxccy"/>`,
		"fallback": "iconoven:car-key-sharp",
	});
}

export default Component;
