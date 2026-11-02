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
		"content": `<style>.juufe7eyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 12l-5-5l-5 5m-8 5h9a4 4 0 0 0 4-4V7");
}
</style><path class="juufe7eyi"/>`,
		"fallback": "coolicons:arrow-turn-right-up-duotone-round",
	});
}

export default Component;
