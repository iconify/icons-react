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
		"content": `<style>.j2ri7x7xq {
  fill: currentColor;
  d: path("m12 16l3.5-3l6 4a2.5 2.5 0 0 1-2.5 2.5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}

.xc1u9ib7i {
  d: path("M2.5 17L7 12.5l5 3.5m0-11.5V16");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="xc1u9ib7i"/><path class="j2ri7x7xq"/></g>`,
		"fallback": "uix-sharp:colorize-photo",
	});
}

export default Component;
