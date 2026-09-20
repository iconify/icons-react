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
		"content": `<style>.bq4e1jb8b {
  d: path("m7 10 3 3 7 -7");
}

.km2_vvbqp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.omfkq6bpt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 10 3 3 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="omfkq6bpt"/><path class="km2_vvbqp"/><path class="bq4e1jb8b"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:assertion-duotone-bold",
	});
}

export default Component;
