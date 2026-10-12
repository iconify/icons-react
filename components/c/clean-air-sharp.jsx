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
		"content": `<style>.ro_cxfb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h8.5A2.75 2.75 0 1 0 8.5 6.5m-5.75 6.75H17.5A2.75 2.75 0 1 1 14.75 16m-12 1.25h6M18 3q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25Q17.61 5.86 18 3Z");
}
</style><path class="ro_cxfb5y"/>`,
		"fallback": "iconoven:clean-air-sharp",
	});
}

export default Component;
