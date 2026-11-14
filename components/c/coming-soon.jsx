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
		"content": `<style>.a7pq-8brt {
  d: path("M7.5 2.5c2.25 1.75 3 4.25 3 7V13h-6V9.5c0-2.75.75-5.25 3-7m-3 7l-1.75 2.25v2.75L4.5 13m6-3.5l1.75 2.25v2.75L10.5 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.tcg2edcfn {
  d: path("M7.031 13h.938a1.32 1.32 0 0 1 1.281 1a.805.805 0 0 1-.781 1H6.531a.805.805 0 0 1-.781-1a1.32 1.32 0 0 1 1.281-1M6.25 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-.5 7.5h3.5c0 2.25-.5 3.75-1.75 5.5c-1.25-1.75-1.75-3.25-1.75-5.5m9.75-.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}
</style><g class="hntgybcog"><path class="a7pq-8brt"/><path class="tcg2edcfn"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix:coming-soon",
	});
}

export default Component;
