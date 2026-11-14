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
		"content": `<style>.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.mfajabc8n {
  d: path("m7 16.5l3.5-4l2.5 2l3.5-4M17 3c.2 2.1 1 2.9 3 3c-2 .1-2.8.9-3 3c-.2-2.1-1-2.9-3-3c2-.1 2.8-.9 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="mfajabc8n"/></g>`,
		"fallback": "uix-sharp:ai-insights-invest",
	});
}

export default Component;
