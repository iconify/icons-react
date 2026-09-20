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
		"content": `<style>.klj1k5byh {
  d: path("M4.17 14.83a4 4 0 0 1 0 -5.66");
}

.oayjtvtuh {
  d: path("M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxwimoiqt {
  d: path("M19.83 9.17a4 4 0 0 1 0 5.66");
}
</style><g class="s0phu2bbs"><path class="oayjtvtuh"/><path class="yxwimoiqt"/><path class="klj1k5byh"/></g>`,
		"fallback": "iconmind:haptic-outline-bold",
	});
}

export default Component;
