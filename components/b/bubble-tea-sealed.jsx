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
		"content": `<style>.qlvirmb1l {
  d: path("M11.5 2.5h3v8h-3Zm-2 16.25h.01m4.99 0h.01M12 15.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whl9nbc_l {
  d: path("m5.5 7.5l1.5 14h10l1.5-14M4 7.5h16");
}
</style><g class="ulnmmdpxh"><path class="whl9nbc_l"/><path class="qlvirmb1l"/></g>`,
		"fallback": "uix-sharp:bubble-tea-sealed",
	});
}

export default Component;
