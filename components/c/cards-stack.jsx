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
		"content": `<style>.gkkc-lzxp {
  d: path("m10.07 10.88l2.11 2.49q.32.38 0 .76l-2.11 2.49q-.32.38-.64 0l-2.11-2.49q-.32-.38 0-.76l2.11-2.49q.32-.38.64 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjfs37b5f {
  d: path("M6.75 6.25v-1.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2 2h-3");
}

.znk3-x-li {
  width: 13px;
  height: 15px;
  x: 3.25px;
  y: 6.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="rjfs37b5f"/><rect class="znk3-x-li"/><path class="gkkc-lzxp"/></g>`,
		"fallback": "iconoven:cards-stack",
	});
}

export default Component;
