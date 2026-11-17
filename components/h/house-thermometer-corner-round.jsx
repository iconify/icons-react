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
		"content": `<style>.n-dvx6btk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0L17.714 8M17 12a1.5 1.5 0 0 1 1.5 1.5v3.373A2.25 2.25 0 0 1 17 20.8m0-8.8a1.5 1.5 0 0 0-1.5 1.5v3.373A2.25 2.25 0 0 0 17 20.8");
}
</style><path class="n-dvx6btk"/>`,
		"fallback": "coolicons:house-thermometer-corner-round",
	});
}

export default Component;
