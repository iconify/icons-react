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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u7m9dbcoj {
  d: path("M12.5 15h3");
}

.y5__l6b-e {
  d: path("m9 10 2.5 2.5L9 15");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="y5__l6b-e"/><path class="u7m9dbcoj"/></g>`,
		"fallback": "iconmind:document-terminal-outline-bold",
	});
}

export default Component;
