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
		"content": `<style>.a2396gb4u {
  d: path("M2.5 18.5q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}

.gtk9mryps {
  d: path("M12 18.5L7.25 5l-1-2.5m5.75 16L16.75 5l1-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a2396gb4u"/><path class="gtk9mryps"/></g>`,
		"fallback": "uix-sharp:artistic-swimming",
	});
}

export default Component;
