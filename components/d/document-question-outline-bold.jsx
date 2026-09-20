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

.da_3coiun {
  d: path("M11 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x8v4jvb8m {
  d: path("M9.5 11.5A2.5 2.5 0 1 1 12 14");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="x8v4jvb8m"/><path class="da_3coiun"/></g>`,
		"fallback": "iconmind:document-question-outline-bold",
	});
}

export default Component;
