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
		"content": `<style>.j40-1f_nc {
  d: path("M2.5 13.5q2.375-1 4.75 0t4.75 0t4.75 0t4.75 0M5 18.5q2.375-1 4.75 0t4.75 0t4.75 0");
}

.n31ubla9o {
  d: path("M7.25 13.5L9 7.5L12.5 5l4.25 8.5M12.5 5l-.75 8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n31ubla9o"/><path class="j40-1f_nc"/></g>`,
		"fallback": "uix-sharp:ice-floe",
	});
}

export default Component;
