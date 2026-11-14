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
		"content": `<style>.art3qhbjz {
  d: path("M9.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 16.5a3.5 3.5 0 0 1 7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lv3m3nb3k {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M12 2.5v3m0 13v3M2.5 12h3m13 0h3");
}
</style><g class="hntgybcog"><path class="lv3m3nb3k"/><path class="art3qhbjz"/></g>`,
		"fallback": "uix:headhunter",
	});
}

export default Component;
