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
		"content": `<style>.kp3dedlav {
  d: path("M12 17H9c-1.28 0-2.36.36-3 1l-1 1c-.738.738-2-.524-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4z");
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
</style><g class="nrj6p8qat"><path class="nii8x_bfq"/><path class="kp3dedlav"/></g>`,
		"fallback": "coolicons:chat-heart-duocolor-round",
	});
}

export default Component;
