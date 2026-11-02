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
		"content": `<style>.xuqrovbae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m5 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0m4-9v5m4 4h5");
}
</style><path class="xuqrovbae"/>`,
		"fallback": "coolicons:chart-donut-duocolor-round",
	});
}

export default Component;
