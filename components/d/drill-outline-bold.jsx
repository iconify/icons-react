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
		"content": `<style>.ez1_3xbuo {
  d: path("M14 8h7");
}

.nguhiybnr {
  d: path("M4 5h10v6H4Z");
}

.r411km12t {
  d: path("M6 11v9h4v-9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nguhiybnr"/><path class="r411km12t"/><path class="ez1_3xbuo"/></g>`,
		"fallback": "iconmind:drill-outline-bold",
	});
}

export default Component;
