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
		"content": `<style>.nt5htob7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1M17 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1");
}
</style><path class="nt5htob7c"/>`,
		"fallback": "coolicons:brackets-duocolor-round",
	});
}

export default Component;
