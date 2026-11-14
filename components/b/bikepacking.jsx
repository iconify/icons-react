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
		"content": `<style>.buq3pfbrk {
  d: path("M5.75 16H12l4.5-7.5H9l3 7.5m-6.25 0L9 8.5v-2m-1.5 0h3m6 2l1.75 7.5M16.5 8.5L16 6h2.5");
}

.faq1qwb0r {
  d: path("M2.25 16a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.muzi7xbvm {
  d: path("M9 7c-3 0-5.5.5-6.5 2c1.5 1 4 .75 6.5-.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="faq1qwb0r"/><path class="buq3pfbrk"/><path class="muzi7xbvm"/></g>`,
		"fallback": "uix-sharp:bikepacking",
	});
}

export default Component;
