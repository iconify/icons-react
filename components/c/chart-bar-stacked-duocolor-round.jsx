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
		"content": `<style>.s04gq1kef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20v-5a4 4 0 0 1 4-4h2V7a3 3 0 0 1 6 0v1h2a4 4 0 0 1 4 4v8zm6 0v-9m6 9V8M3 15h6m0-3h6m0 2h6");
}
</style><path class="s04gq1kef"/>`,
		"fallback": "coolicons:chart-bar-stacked-duocolor-round",
	});
}

export default Component;
