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
		"content": `<style>.i5d2grbwo {
  d: path("M13 2H6v14h10V5");
}

.jls6b8fnh {
  d: path("M16.5 4.5h5");
}

.l9kfpmzgx {
  d: path("M19 2v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s27ukbqxc {
  d: path("M16 8H9v14h10V11");
}
</style><g class="s0phu2bbs"><path class="i5d2grbwo"/><path class="s27ukbqxc"/><path class="jls6b8fnh"/><path class="l9kfpmzgx"/></g>`,
		"fallback": "iconmind:corpus-add-outline-bold",
	});
}

export default Component;
