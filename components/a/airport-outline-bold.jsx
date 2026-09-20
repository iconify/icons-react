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
		"content": `<style>.ay19-ob6x {
  d: path("m6 9 4.5 -4.5h3L18 9");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yomj0bbqc {
  d: path("M9 21V9h6v12");
}
</style><g class="s0phu2bbs"><path class="yomj0bbqc"/><path class="ay19-ob6x"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:airport-outline-bold",
	});
}

export default Component;
