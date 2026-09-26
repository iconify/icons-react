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
		"content": `<style>.jkved3btd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7201 3.79L12.7201 2.0406C13.3601 1.854 14 2.3339 14 3.0006L14 22L6.7215 19.8892C6.2941 19.7653 6 19.3738 6 18.9288L6 4.7501C6 4.3056 6.2934 3.9145 6.7201 3.79ZM18 21L18 4C18 3.4477 17.5523 3 17 3L14 3M2 21L10.5517 21M14 21L22 21M11 11L11 13");
}
</style><path class="jkved3btd"/>`,
		"fallback": "keyline-icons:door-open",
	});
}

export default Component;
