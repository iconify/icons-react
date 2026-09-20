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
		"content": `<style>.atzi6u7-j {
  d: path("m14 16 3 3 5 -5");
}

.q2i8lfb2i {
  d: path("M4 13h10");
}

.rsui_05gv {
  d: path("M4 8h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rsui_05gv"/><path class="q2i8lfb2i"/><path class="atzi6u7-j"/></g>`,
		"fallback": "iconmind:bias-check-outline-bold",
	});
}

export default Component;
