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
		"content": `<style>.jxa8v5bhe {
  d: path("m17.5 17.5l1-.75v2.75");
}

.msatfabgr {
  d: path("M12.4 12.5H2.5V10h19v2.4m-9.1 8.1H3.5v-8h8.9m-.4 0v8m3.25-5.25h6.25v6.25h-6.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="msatfabgr"/><path class="jxa8v5bhe"/></g>`,
		"fallback": "uix-sharp:bank-counter",
	});
}

export default Component;
