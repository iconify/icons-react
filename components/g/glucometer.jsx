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
		"content": `<style>.dtbmf4brs {
  d: path("M11.683 18.322a5.8 5.8 0 0 1-2.183.428c-3.25 0-6-2.75-6-6c0-3.5 3-6.5 6-10.25c2.63 3.288 5.26 5.999 5.869 8.976M14.5 14.25h7v7.5h-7Z");
}

.i03hzabpm {
  d: path("M16 15.75h4v2.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtbmf4brs"/><path class="i03hzabpm"/></g>`,
		"fallback": "uix-sharp:glucometer",
	});
}

export default Component;
