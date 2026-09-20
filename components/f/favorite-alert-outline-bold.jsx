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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.u0hfy7bsd {
  d: path("M9 14a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}
</style><g class="s0phu2bbs"><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="u0hfy7bsd"/></g>`,
		"fallback": "iconmind:favorite-alert-outline-bold",
	});
}

export default Component;
