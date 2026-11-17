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
		"content": `<style>.w-xusgm3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 2V22M13 5L10 2L7 5M10 10C10 13.3 12.8197 15.8056 17 17");
}
</style><path class="w-xusgm3h"/>`,
		"fallback": "keyline-icons:arrow-pull-fill",
	});
}

export default Component;
