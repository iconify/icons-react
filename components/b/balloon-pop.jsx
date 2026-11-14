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
		"content": `<style>.gdpk7jb3k {
  d: path("m12 15.5l1 1.5h-2Zm0 1.5c-1.25 1.75 1.25 3 0 4.75M7 9.5l2.5-2L12 11l2.5-3.5l2.5 2M4.25 4.125za.785.785 0 0 1 1.134.768l-.016.187a.772.772 0 0 1-1.243.545l-.022-.017a.88.88 0 0 1 .147-1.483m15.5 0za.785.785 0 0 0-1.134.768l.016.187a.772.772 0 0 0 1.243.545l.022-.017a.88.88 0 0 0-.147-1.483");
}

.gjv74fwam {
  d: path("M7 9a5 6.5 0 1 0 10 0A5 6.5 0 1 0 7 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gjv74fwam"/><path class="gdpk7jb3k"/></g>`,
		"fallback": "uix:balloon-pop",
	});
}

export default Component;
