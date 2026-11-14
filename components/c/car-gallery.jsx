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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.kafxb8bpo {
  d: path("M7.5 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zllblbebl {
  d: path("M5.5 15v-2.5l2.5-1l2-3h4.5l2 3l2 1V15Z");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="zllblbebl"/><path class="kafxb8bpo"/></g>`,
		"fallback": "uix-sharp:car-gallery",
	});
}

export default Component;
