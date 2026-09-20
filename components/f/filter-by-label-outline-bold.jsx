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
		"content": `<style>.b4gzso3dl {
  d: path("M12 13.5v3");
}

.hlxwfib3h {
  d: path("m9 10.5 3 3 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="s0phu2bbs"><path class="w3hyiobto"/><path class="hlxwfib3h"/><path class="b4gzso3dl"/></g>`,
		"fallback": "iconmind:filter-by-label-outline-bold",
	});
}

export default Component;
