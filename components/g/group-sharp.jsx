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
		"content": `<style>.mxdmsvf9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7h7v5H7zm3 5h7v5h-7zM3 6V3h3m12 0h3v3m0 12v3h-3M6 21H3v-3");
}
</style><path class="mxdmsvf9m"/>`,
		"fallback": "coolicons:group-sharp",
	});
}

export default Component;
