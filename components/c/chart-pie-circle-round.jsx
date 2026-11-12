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
		"content": `<style>.uyjz7obgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12a9 9 0 1 0-9 9v-9zm-6 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="uyjz7obgp"/>`,
		"fallback": "coolicons:chart-pie-circle-round",
	});
}

export default Component;
