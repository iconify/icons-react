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
		"content": `<style>.f80wipbwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 2V22M10 2V22M6 8H8C9.1046 8 10 8.895 10 10V14C10 15.105 9.1046 16 8 16H6C4.8954 16 4 15.105 4 14V10C4 8.895 4.8954 8 6 8ZM20 6V18C20 19.105 19.1046 20 18 20H16C14.8954 20 14 19.105 14 18V6C14 4.895 14.8954 4 16 4H18C19.1046 4 20 4.895 20 6Z");
}
</style><path class="f80wipbwj"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-end",
	});
}

export default Component;
