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
		"content": `<style>.opi6knb3w {
  d: path("m8.5 20.5l3.5-7l3.5 7");
}

.pb_9jfgem {
  d: path("M3 20.5V16q1.5-5 9-12q7.5 7 9 12v4.5Zm9-18v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pb_9jfgem"/><path class="opi6knb3w"/></g>`,
		"fallback": "uix-sharp:bell-tent",
	});
}

export default Component;
