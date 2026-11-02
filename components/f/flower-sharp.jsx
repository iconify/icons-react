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
		"content": `<style>.hmk-13lct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6a3 3 0 0 1 6 0a3 3 0 0 1 0 6a3 3 0 0 1-6 0a3 3 0 0 1 0-6m3 9v6m0-12h.01");
}
</style><path class="hmk-13lct"/>`,
		"fallback": "coolicons:flower-sharp",
	});
}

export default Component;
