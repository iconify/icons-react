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
		"content": `<style>.hclo6jb2r {
  d: path("M8 16h8");
}

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tsceiyk7b {
  d: path("m5 13 7 7 7 -7Z");
}

.v3lkrabjd {
  fill: currentColor;
  d: path("m5 13 7 7 7 -7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xnrghp1vk {
  fill: currentColor;
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="xnrghp1vk"/><path class="v3lkrabjd"/><path class="o-4bk_b4n"/><path class="tsceiyk7b"/><path class="hclo6jb2r"/></g>`,
		"fallback": "iconmind:ice-cream-duotone-bold",
	});
}

export default Component;
