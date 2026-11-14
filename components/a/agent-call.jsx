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
		"content": `<style>.by9a4e0yo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.072 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.704 0 1.368.081M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m9 7.5h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H18L16 21v-1.5h-.5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1");
}
</style><path class="by9a4e0yo"/>`,
		"fallback": "uix:agent-call",
	});
}

export default Component;
