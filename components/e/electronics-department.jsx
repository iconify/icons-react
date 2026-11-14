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
		"content": `<style>.avxyubyxr {
  d: path("M2.5 4h14v10.5h-14Zm7 10.5V18m-3.5.5h7M18 7h3.5v14.5H18Zm1.75 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xms_00o3s {
  d: path("M18.75 16.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="avxyubyxr"/><path class="xms_00o3s"/></g>`,
		"fallback": "uix-sharp:electronics-department",
	});
}

export default Component;
