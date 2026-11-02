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
		"content": `<style>.p_divgc8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-9l7-7l7 7v9m-9 0v-4a2 2 0 1 1 4 0v4");
}
</style><path class="p_divgc8n"/>`,
		"fallback": "coolicons:house-alt-2-sharp",
	});
}

export default Component;
