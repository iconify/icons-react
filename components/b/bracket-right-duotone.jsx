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
		"content": `<style>.vwtu_hbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 2L12 2C13.1046 2 14 2.8954 14 4L14 20C14 21.1046 13.1046 22 12 22L10 22");
}
</style><path class="vwtu_hbmr"/>`,
		"fallback": "keyline-icons:bracket-right-duotone",
	});
}

export default Component;
