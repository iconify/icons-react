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
		"content": `<style>.cp7471bfa {
  d: path("M14.5 9v7");
}

.n2xwwpbqf {
  fill: currentColor;
  d: path("M7 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rorj5dbvh {
  d: path("M7 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.s-ysp2bbt {
  d: path("M20.16 15.8a9 9 0 1 1 0 -7.6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n2xwwpbqf"/><path class="rorj5dbvh"/><path class="cp7471bfa"/><path class="s-ysp2bbt"/></g>`,
		"fallback": "iconmind:at-mention-duotone-bold",
	});
}

export default Component;
