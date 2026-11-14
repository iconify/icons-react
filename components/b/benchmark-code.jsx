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
		"content": `<style>.j1t6tjb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 19v-4.5M12 19v-9m3.5 9V5m-10 3l-3 4l3 4m13-8l3 4l-3 4");
}
</style><path class="j1t6tjb1i"/>`,
		"fallback": "uix-sharp:benchmark-code",
	});
}

export default Component;
