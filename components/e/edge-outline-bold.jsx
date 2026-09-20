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
		"content": `<style>.c-vnm8iux {
  d: path("M15 12h3");
}

.f3r6jjb4a {
  d: path("M20 3v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v2xyhybzi {
  d: path("M5.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}
</style><g class="s0phu2bbs"><path class="f3r6jjb4a"/><path class="v2xyhybzi"/><path class="c-vnm8iux"/></g>`,
		"fallback": "iconmind:edge-outline-bold",
	});
}

export default Component;
