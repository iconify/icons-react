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
		"content": `<style>.e4d-1sbbl {
  d: path("M5.75 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm8 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}

.wk8dp4bpe {
  d: path("m8 14l3-4.5h3.5L16 14");
}
</style><g class="ulnmmdpxh"><path class="w7mc2oblu"/><path class="e4d-1sbbl"/><path class="wk8dp4bpe"/></g>`,
		"fallback": "uix-sharp:bike-locker",
	});
}

export default Component;
