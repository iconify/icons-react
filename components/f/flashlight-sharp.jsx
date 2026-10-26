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
		"content": `<style>.es5g5tbqk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12L13 12M17 7L17 17M2 16L9.76393 16C11.2344 16 12.6847 16.3424 14 17C15.3153 17.6576 16.7656 18 18.2361 18L22 18L22 6L18.2361 6C16.7656 6 15.3153 6.34237 14 7C12.6847 7.65763 11.2344 8 9.76393 8L2 8Z");
}
</style><path class="es5g5tbqk"/>`,
		"fallback": "keyline-icons:flashlight-sharp",
	});
}

export default Component;
