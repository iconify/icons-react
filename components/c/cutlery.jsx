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
		"content": `<style>.n-pjypbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.75v4a2.5 2.5 0 0 0 5 0v-4m-2.5 0v18.5m8.5-1.75v-5.25h-.75V7.5c0-2.6 1.35-4.75 3.25-4.75h.25V19.5a1.38 1.38 0 0 1-2.75 0");
}
</style><path class="n-pjypbry"/>`,
		"fallback": "iconoven:cutlery",
	});
}

export default Component;
