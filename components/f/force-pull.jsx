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
		"content": `<style>.aqhhxbb6z {
  d: path("m18 9l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq52442qy {
  d: path("M2.5 7h9v10h-9Zm9 5c2.25 2.5 4-2.5 6.25 0H21");
}
</style><g class="ulnmmdpxh"><path class="xq52442qy"/><path class="aqhhxbb6z"/></g>`,
		"fallback": "uix-sharp:force-pull",
	});
}

export default Component;
