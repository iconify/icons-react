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
		"content": `<style>.d6pj2ebvr {
  d: path("m18.13 3.38l2.49 2.49q.88.88 0 1.76l-2.49 2.49q-.88.88-1.76 0l-2.49-2.49q-.88-.88 0-1.76l2.49-2.49q.88-.88 1.76 0");
}

.hlut1ob9o {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q50ovcblk {
  width: 8px;
  height: 8px;
  x: 13.25px;
  y: 13.25px;
  rx: 1.75px;
}

.zo-pglouc {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="zo-pglouc"/><rect class="hlut1ob9o"/><rect class="q50ovcblk"/><path class="d6pj2ebvr"/></g>`,
		"fallback": "iconoven:extension-block",
	});
}

export default Component;
