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
		"content": `<style>.p937wxhzi {
  d: path("M10 21h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.usr9unc6p {
  d: path("M8 12a6 6 0 1 1 8 0v3H8Z");
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="s0phu2bbs"><path class="usr9unc6p"/><path class="x3sflacnk"/><path class="p937wxhzi"/></g>`,
		"fallback": "iconmind:idea-bulb-outline-bold",
	});
}

export default Component;
