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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jfo38zbbj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18m-9 0V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m7-9.4l.75-.6a2 2 0 0 1 2.5 0l3 2.4a2 2 0 0 1 .75 1.56V20");
}

.kbioxkbag {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 20V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v14Z");
}
</style><g class="ft5dv1b6b"><path class="kbioxkbag"/><path class="jfo38zbbj"/></g>`,
		"fallback": "coolicons:building-2-duotone",
	});
}

export default Component;
