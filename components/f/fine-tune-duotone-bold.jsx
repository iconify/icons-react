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
		"content": `<style>.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.kr1cz4b8j {
  d: path("M9 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.m1o3_obxt {
  fill: currentColor;
  d: path("M13 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.p33184bqk {
  fill: currentColor;
  d: path("M9 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.xaev2ybax {
  d: path("M13 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="edllzuogn"/><path class="p33184bqk"/><path class="m1o3_obxt"/><path class="iaozfqbuj"/><path class="l0zc9ibud"/><path class="kr1cz4b8j"/><path class="mvm7r4bea"/><path class="xaev2ybax"/></g>`,
		"fallback": "iconmind:fine-tune-duotone-bold",
	});
}

export default Component;
