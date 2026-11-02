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
		"content": `<style>.ygi4r2b3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14v-1c0-.64.36-1.36 1-2l1-1a1.414 1.414 0 0 1 2 0l1 1a1.414 1.414 0 0 0 2 0l4-4c.369-.369 1 .262 1 1v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2M3 4v12a4 4 0 0 0 4 4h14");
}
</style><path class="ygi4r2b3w"/>`,
		"fallback": "coolicons:chart-area-round",
	});
}

export default Component;
