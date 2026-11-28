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
		"content": `<style>.iss2zcmcq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L4 22L20 22L20 20M20 15.3431L20 14.3431L20 4L17 4M6.6569 2L7.6569 2L17 2L17 7L12.6569 7L11.6569 7M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="iss2zcmcq"/>`,
		"fallback": "keyline-icons:clipboard-off-sharp",
	});
}

export default Component;
