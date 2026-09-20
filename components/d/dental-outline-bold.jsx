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
		"content": `<style>.jm7jgyogs {
  d: path("M4 6a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 13 -2.5 13C10 19 10 13 9 13s-1 6 -2.5 6C4 19 2 10 4 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vrzeiketi {
  d: path("m16 15 2 2 4 -4");
}
</style><g class="s0phu2bbs"><path class="jm7jgyogs"/><path class="vrzeiketi"/></g>`,
		"fallback": "iconmind:dental-outline-bold",
	});
}

export default Component;
