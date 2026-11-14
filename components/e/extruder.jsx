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
		"content": `<style>.fh9ko2brh {
  d: path("M5 11.5L7 14l2-2.5l2 2.5l2-2.5l2 2.5M4.5 15.5V20m11-4.5V20");
}

.u3e9gfosz {
  d: path("M2.5 10h15v5.5h-15ZM5 3.5h6L9.5 10h-3Zm12.5 6l4 1.75v3l-4 1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u3e9gfosz"/><path class="fh9ko2brh"/></g>`,
		"fallback": "uix-sharp:extruder",
	});
}

export default Component;
