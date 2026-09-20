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
		"content": `<style>.axwkrzbmo {
  d: path("m8 8 4 4 -4 4 -4 -4Z");
}

.hx3h6oiex {
  fill: currentColor;
  d: path("m8 8 4 4 -4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nuz6-76is {
  d: path("M15 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zl61012kd {
  d: path("M18.5 9.5 21 12l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="hx3h6oiex"/><path class="axwkrzbmo"/><path class="nuz6-76is"/><path class="zl61012kd"/></g>`,
		"fallback": "iconmind:decoder-only-duotone-bold",
	});
}

export default Component;
