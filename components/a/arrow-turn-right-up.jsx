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
		"content": `<style>.pv_fubctc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 12l-5-5l-5 5m-8 5h11a2 2 0 0 0 2-2V7");
}
</style><path class="pv_fubctc"/>`,
		"fallback": "coolicons:arrow-turn-right-up",
	});
}

export default Component;
