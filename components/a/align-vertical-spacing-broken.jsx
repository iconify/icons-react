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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kuix36bab {
  d: path("M14 21L2 21M22 21L18 21");
}

.uns2q8bjl {
  d: path("M9 8H8C6.11438 8 5.17157 8 4.58579 8.58579C4 9.17157 4 10.1144 4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8H13");
}

.yszjebc_r {
  d: path("M22 3L2 3");
}
</style><g class="ipq1z-bjh"><path class="yszjebc_r"/><path class="kuix36bab"/><path class="uns2q8bjl"/></g>`,
		"fallback": "solar:align-vertical-spacing-broken",
	});
}

export default Component;
