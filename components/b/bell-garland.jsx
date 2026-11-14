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
		"content": `<style>.qr6qwbcrg {
  d: path("M2.5 6q9.5 8 19 0M5 7.75V9.5m-2.5 5c.75-1 .75-2 .75-3.25a1.75 1.75 0 0 1 3.5 0c0 1.25 0 2.25.75 3.25Zm1.5 0a1 1 0 0 0 2 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu5xb2b3m {
  d: path("M12 10v2m-2.5 5c.75-1 .75-2 .75-3.25a1.75 1.75 0 0 1 3.5 0c0 1.25 0 2.25.75 3.25Zm1.5 0a1 1 0 0 0 2 0m6-9.25V9.5m-2.5 5c.75-1 .75-2 .75-3.25a1.75 1.75 0 0 1 3.5 0c0 1.25 0 2.25.75 3.25Zm1.5 0a1 1 0 0 0 2 0");
}
</style><g class="ulnmmdpxh"><path class="qr6qwbcrg"/><path class="yu5xb2b3m"/></g>`,
		"fallback": "uix-sharp:bell-garland",
	});
}

export default Component;
