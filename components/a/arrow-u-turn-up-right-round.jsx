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
		"content": `<style>.mrk0z1wmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 13l4-4l-4-4m4 4H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h6");
}
</style><path class="mrk0z1wmx"/>`,
		"fallback": "coolicons:arrow-u-turn-up-right-round",
	});
}

export default Component;
