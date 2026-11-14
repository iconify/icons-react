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
		"content": `<style>.lp475fcdg {
  d: path("M2.5 20.5h19V4h-8l-5 16.5");
}

.qco5sfvdy {
  d: path("M17.5 4L16 8.5l2.5 3l-1.75 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lp475fcdg"/><path class="qco5sfvdy"/></g>`,
		"fallback": "uix-sharp:highwall-crack",
	});
}

export default Component;
