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
		"content": `<style>.yff31rbos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m19 7l-4-4l-4 4m4-4v14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6");
}
</style><path class="yff31rbos"/>`,
		"fallback": "coolicons:arrow-u-turn-right-up-duocolor-round",
	});
}

export default Component;
