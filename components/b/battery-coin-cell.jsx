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
		"content": `<style>.h0--x8cea {
  d: path("M2.5 9v5.5a9.5 5.5 0 0 0 19 0V9M12 7v4m-2-2h4");
}

.sh7h1k-0d {
  d: path("M2.5 9a9.5 5.5 0 1 0 19 0a9.5 5.5 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sh7h1k-0d"/><path class="h0--x8cea"/></g>`,
		"fallback": "uix-sharp:battery-coin-cell",
	});
}

export default Component;
