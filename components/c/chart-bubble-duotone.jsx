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

.njq5egbto {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 4v14a2 2 0 0 0 2 2h16");
}

.yepu89uip {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-6 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 8 13m8 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}
</style><g class="ft5dv1b6b"><path class="yepu89uip"/><path class="njq5egbto"/></g>`,
		"fallback": "coolicons:chart-bubble-duotone",
	});
}

export default Component;
