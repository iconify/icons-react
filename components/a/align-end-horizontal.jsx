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
		"content": `<style>.c027530gx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 22H2M18 18H16C14.8954 18 14 17.105 14 16V12C14 10.895 14.8954 10 16 10H18C19.1046 10 20 10.895 20 12V16C20 17.105 19.1046 18 18 18ZM8 18H6C4.8954 18 4 17.105 4 16V4C4 2.895 4.8954 2 6 2H8C9.1046 2 10 2.895 10 4V16C10 17.105 9.1046 18 8 18Z");
}
</style><path class="c027530gx"/>`,
		"fallback": "keyline-icons:align-end-horizontal",
	});
}

export default Component;
