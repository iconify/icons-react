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
		"content": `<style>.db_wykbsk {
  d: path("M3.5 8h17v13.5h-17Z");
}

.jywqgfdki {
  d: path("M6.5 11h11v10.5h-11Zm5.5 0v10.5M8.5 6V2.5M6.75 4.25L8.5 2.5l1.75 1.75M15.5 2.5V6m-1.75-1.75L15.5 6l1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="db_wykbsk"/><path class="jywqgfdki"/></g>`,
		"fallback": "uix-sharp:elevator-building",
	});
}

export default Component;
