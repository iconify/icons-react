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
		"content": `<style>.zj25vsk9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20v-7a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10zm6 0v-9m6 9V8M3 15h6m0-3h6m0 2h6");
}
</style><path class="zj25vsk9d"/>`,
		"fallback": "coolicons:chart-bar-stacked-duocolor",
	});
}

export default Component;
