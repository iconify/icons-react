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
		"content": `<style>.e7yjx9bjy {
  d: path("M3 9.5v3a9 3.5 0 0 0 18 0v-3m-18.5 10h19M12 9.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xau6qobgm {
  d: path("M3 9.5a9 3.5 0 1 0 18 0a9 3.5 0 1 0-18 0Z");
}
</style><g class="ulnmmdpxh"><path class="xau6qobgm"/><path class="e7yjx9bjy"/></g>`,
		"fallback": "uix-sharp:floor-cushion",
	});
}

export default Component;
