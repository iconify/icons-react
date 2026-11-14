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
		"content": `<style>.cixusfbwk {
  d: path("M5 2.5h14v11H5Zm9.5 11v6.25a1.75 1.75 0 0 0 3.5 0V13.5");
}

.to_vcqswz {
  d: path("M7 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cixusfbwk"/><path class="to_vcqswz"/></g>`,
		"fallback": "uix-sharp:butcher-shop",
	});
}

export default Component;
