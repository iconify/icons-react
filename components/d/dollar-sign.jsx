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
		"content": `<style>.ldjwmecsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7.5C16 5.8 14.3 5 12 5C9.3 5 7.5 6.3 7.5 8.25c0 4.75 9 2.25 9 7.25c0 2.1-1.9 3.5-4.5 3.5c-2.4 0-4.2-.9-4.75-2.5M12 2.5V5m0 14v2.5");
}
</style><path class="ldjwmecsl"/>`,
		"fallback": "uix:dollar-sign",
	});
}

export default Component;
