import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wg97h6mas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.08 5.84L21.47 30.11l-7.83-8.8l-3.48 3.1l11.51 13.43L42.5 10.03V38.5c0 2.21-1.79 4-4 4h-29c-2.21 0-4-1.79-4-4v-29c0-2.21 1.79-4 4-4h29c.56 0 1.1.12 1.58.34");
}
</style><path class="wg97h6mas"/>`,
		"fallback": "arcticons:handyvertragde-servicewelt",
	});
}

export default Component;
