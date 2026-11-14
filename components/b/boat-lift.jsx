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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwlcmyxvb {
  d: path("M3.5 21V3.5h17V21");
}

.ydao2826v {
  d: path("M12 3.5v6M7.5 13L12 9.5l4.5 3.5m-10 0h11l-1.75 4.5h-7.5Z");
}
</style><g class="ulnmmdpxh"><path class="xwlcmyxvb"/><path class="ydao2826v"/></g>`,
		"fallback": "uix-sharp:boat-lift",
	});
}

export default Component;
