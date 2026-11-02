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
		"content": `<style>.kwh_pwbjw {
  d: path("M12 17H7l-4 4V3h18v14z");
}

.nii8x_bfq {
  stroke-opacity: 0.4;
  d: path("M12 9c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nii8x_bfq"/><path class="kwh_pwbjw"/></g>`,
		"fallback": "coolicons:chat-heart-duocolor-sharp",
	});
}

export default Component;
