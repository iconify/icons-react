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
		"content": `<style>.hh24debgs {
  d: path("M12.5 21.25v-4.5a2.375 2.375 0 0 1 4.75 0v4.5m-1.875-11v2M6.02 17.93l-2.79.74q-.48.13-.35.61l.32 1.21q.13.48.61.35l2.79-.74q.48-.13.35-.61l-.32-1.21q-.13-.48-.61-.35M9.5 9.5l-6.25 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zs0db7bvq {
  d: path("M9.5 20.75V5.5q0-.5.5-.5h1q.5 0 .5.5v1q0 .5.5.5h1.75q.5 0 .5-.5v-1q0-.5.5-.5H16q.5 0 .5.5v1q0 .5.5.5h1.75q.5 0 .5-.5v-1q0-.5.5-.5h1q.5 0 .5.5v15.25q0 .5-.5.5H10q-.5 0-.5-.5");
}
</style><g class="hntgybcog"><path class="zs0db7bvq"/><path class="hh24debgs"/></g>`,
		"fallback": "iconoven:drawbridge",
	});
}

export default Component;
