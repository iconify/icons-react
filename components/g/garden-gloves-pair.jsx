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
		"content": `<style>.fcyim7zne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5v-7l-2.75-2.75A1.6 1.6 0 0 1 5 9.5l.5.5V6a2.5 2.5 0 0 1 5 0v15.5Zm13 0v-7l2.75-2.75A1.6 1.6 0 0 0 19 9.5l-.5.5V6a2.5 2.5 0 0 0-5 0v15.5ZM5.5 18h5m3 0h5");
}
</style><path class="fcyim7zne"/>`,
		"fallback": "uix:garden-gloves-pair",
	});
}

export default Component;
