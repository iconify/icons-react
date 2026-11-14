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
		"content": `<style>.d512j5bkv {
  d: path("m10.25 2.5l2.25 2l-2.25 2m3.5 11l-2.25 2l2.25 2");
}

.rn8nmeblc {
  fill: currentColor;
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdp7bqefo {
  d: path("M4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="wdp7bqefo"/><path class="rn8nmeblc"/><path class="d512j5bkv"/></g>`,
		"fallback": "uix-sharp:energy-conservation",
	});
}

export default Component;
