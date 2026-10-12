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
		"content": `<style>.h68bgsaql {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 11.75h.01");
}

.mt8vswhoa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5c0-3.5 3-6.25 7-6.25H14c4 0 7 2.75 7 6.25c0 2.5-2 4.25-4.5 4.25h-13z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wunzbcczh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.6 8.1C7 6.5 8 5.25 9.4 5.5l1.214.243L10.35 7.5ZM7 17.75v1.75m10-1.75v1.75");
}
</style><g class="ux2u0rbkq"><path class="mt8vswhoa"/><path class="wunzbcczh"/><path class="h68bgsaql"/></g>`,
		"fallback": "iconoven:guinea-pig-sharp",
	});
}

export default Component;
