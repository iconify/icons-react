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
		"content": `<style>.a562fv74t {
  d: path("M6 22h12");
}

.rn2_dtbur {
  d: path("M3 3h10v13H3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ubbszwy6j {
  d: path("m13 8 4 4v4");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="rn2_dtbur"/><path class="ubbszwy6j"/><path class="z9ittvbis"/><path class="a562fv74t"/></g>`,
		"fallback": "iconmind:cliff-outline-bold",
	});
}

export default Component;
