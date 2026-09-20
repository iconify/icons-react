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
		"content": `<style>.iv697recx {
  d: path("M7 16.5h6");
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.q60rll86p {
  d: path("M7 13.5h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wk-andm0z {
  d: path("m6 10 4 -4 4 4");
}
</style><g class="s0phu2bbs"><path class="o72p0hsyz"/><path class="wk-andm0z"/><path class="q60rll86p"/><path class="iv697recx"/></g>`,
		"fallback": "iconmind:image-to-text-outline-bold",
	});
}

export default Component;
