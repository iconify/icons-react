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
		"content": `<style>.m4li5fhtu {
  fill: currentColor;
  d: path("m12 15 7 -7 2 2 -7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nvna-acap {
  fill: currentColor;
  d: path("M3 3v13h12V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uistg-qvk {
  d: path("m13 16 -3 3h3");
}

.yv9cwobex {
  d: path("m12 15 7 -7 2 2 -7 7Z");
}

.yy6kkpb1q {
  d: path("M3 3v13h12V3Z");
}
</style><g class="s0phu2bbs"><path class="nvna-acap"/><path class="m4li5fhtu"/><path class="yy6kkpb1q"/><path class="yv9cwobex"/><path class="uistg-qvk"/></g>`,
		"fallback": "iconmind:drawing-duotone-bold",
	});
}

export default Component;
