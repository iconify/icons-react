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
		"content": `<style>.by0qml2lh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 9h1.5a1.75 1.75 0 0 1 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-9A1.75 1.75 0 0 1 11.25 9M9.5 13.5l5-2m-5 6l5-2M12 6.25C10.6 5.4 10.5 3.9 12 2c1.5 1.9 1.4 3.4 0 4.25");
}
</style><path class="by0qml2lh"/>`,
		"fallback": "uix:birthday-candle",
	});
}

export default Component;
