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
		"content": `<style>.hyc08fbbb {
  d: path("M7.5 8.75q4.5 1.5 9 0v2.75c0 2.75-2 4.75-4.5 4.75s-4.5-2-4.5-4.75Zm2.5 2.5h.01m3.99 0h.01");
}

.jf16a4ymc {
  d: path("M9.75 13.5q2.25 1.5 4.5 0M9.5 19h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvwpytbld {
  d: path("M16 2.5H6.75A2.25 2.25 0 0 0 4.5 4.75v14.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V6Zm0 0V6h3.5");
}
</style><g class="ulnmmdpxh"><path class="xvwpytbld"/><path class="hyc08fbbb"/><path class="jf16a4ymc"/></g>`,
		"fallback": "uix-sharp:drama-script",
	});
}

export default Component;
