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
		"content": `<style>.nky4ouekq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5a9.25 9.25 0 0 0 18.5 0m-15.5 0a6.25 6.25 0 0 0 12.5 0m-9.5 0a3.25 3.25 0 0 0 6.5 0M5.5 18.75h13");
}
</style><path class="nky4ouekq"/>`,
		"fallback": "iconoven:amphitheater-sharp",
	});
}

export default Component;
