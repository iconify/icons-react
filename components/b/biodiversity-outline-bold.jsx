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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tl5daebtp {
  d: path("M13 16a5 5 0 0 1 9 0 4 4 0 0 1 -4.5 4 4 4 0 0 1 -4.5 -4");
}

.vlspyzbym {
  d: path("M17 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wpqcgi2_k {
  d: path("M10 5c0 6 -3 9 -8 9 0 -6 3 -9 8 -9");
}

.xotxp7bir {
  d: path("M12 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="wpqcgi2_k"/><path class="xotxp7bir"/><path class="vlspyzbym"/><path class="tl5daebtp"/></g>`,
		"fallback": "iconmind:biodiversity-outline-bold",
	});
}

export default Component;
