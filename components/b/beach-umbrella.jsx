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
		"content": `<style>.xlt357qki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12c0-5 4-8 8.5-8s8.5 3 8.5 8Zm8.5 0v8.5m-9 0h18");
}
</style><path class="xlt357qki"/>`,
		"fallback": "uix:beach-umbrella",
	});
}

export default Component;
