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
		"content": `<style>.k93b51btb {
  d: path("M3 21V6h18v15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytvwm3h5f {
  d: path("M7 10h10v11H7Zm0 3.5h10M7 17h10");
}
</style><g class="ulnmmdpxh"><path class="k93b51btb"/><path class="ytvwm3h5f"/></g>`,
		"fallback": "uix-sharp:dock-door",
	});
}

export default Component;
