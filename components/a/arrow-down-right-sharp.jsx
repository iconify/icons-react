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
		"content": `<style>.xown7vyye {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 18L18 18L18 5M5.7071 5.7071L17.5071 17.5071");
}
</style><path class="xown7vyye"/>`,
		"fallback": "keyline-icons:arrow-down-right-sharp",
	});
}

export default Component;
