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
		"content": `<style>.jqw_w3bks {
  d: path("M6.5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14 8h.01");
}

.ryk1lwbtg {
  d: path("M5 19.5C3.5 16 3.5 13 4 11c1-4.5 4.5-7 9-7s7 3 7 7l1.5.5v1h-9V16c0 2-1.5 3.5-3.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ryk1lwbtg"/><path class="jqw_w3bks"/></g>`,
		"fallback": "uix-sharp:baseball-helmet",
	});
}

export default Component;
