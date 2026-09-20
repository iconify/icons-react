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
		"content": `<style>.g_k4zfu5d {
  d: path("M14 15h6");
}

.gtujb54ma {
  d: path("M4 9h6");
}

.h2-2dgnfu {
  d: path("M12 3v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sm02sv71h {
  d: path("M7 6v6");
}
</style><g class="s0phu2bbs"><path class="h2-2dgnfu"/><path class="sm02sv71h"/><path class="gtujb54ma"/><path class="g_k4zfu5d"/></g>`,
		"fallback": "iconmind:diff-outline-bold",
	});
}

export default Component;
