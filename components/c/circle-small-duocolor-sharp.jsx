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
		"content": `<style>.d91f4wzgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}
</style><path class="d91f4wzgq"/>`,
		"fallback": "coolicons:circle-small-duocolor-sharp",
	});
}

export default Component;
