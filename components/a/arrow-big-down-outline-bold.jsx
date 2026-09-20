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
		"content": `<style>.psj7ltkiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("m12 21 -9 -9h5V3h8v9h5Z");
}
</style><path class="psj7ltkiv"/>`,
		"fallback": "iconmind:arrow-big-down-outline-bold",
	});
}

export default Component;
