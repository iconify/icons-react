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
		"content": `<style>.f5hyt54-v {
  d: path("M10 12h9");
}

.hw7jzw92l {
  d: path("M10 16h9");
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wq04cvbuq {
  d: path("M10 8h9");
}

.z3c71dbbg {
  d: path("M7 3v18");
}
</style><g class="s0phu2bbs"><path class="k6fi9qmtq"/><path class="z3c71dbbg"/><path class="wq04cvbuq"/><path class="f5hyt54-v"/><path class="hw7jzw92l"/></g>`,
		"fallback": "iconmind:index-covering-outline-bold",
	});
}

export default Component;
