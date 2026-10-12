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
		"content": `<style>.e8b163tgy {
  d: path("m12.15 12.91l-1.06-1.06q-.53-.53-1.06 0l-3.18 3.18q-.53.53 0 1.06l1.06 1.06q.53.53 1.06 0l3.18-3.18q.53-.53 0-1.06");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ow92_3bej {
  d: path("m3.75 20.25l3.63-3.63m4.24-4.24l6.63-6.63a1.77 1.77 0 0 0-2.5-2.5l-.5.5");
}
</style><g class="hntgybcog"><path class="ow92_3bej"/><path class="e8b163tgy"/></g>`,
		"fallback": "iconoven:crochet-hook",
	});
}

export default Component;
