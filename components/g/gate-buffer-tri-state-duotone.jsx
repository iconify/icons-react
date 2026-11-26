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
		"content": `<style>.eq2lywkqe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.4712 9.7516L17.9712 12.2516C18.6062 12.6044 19 13.2736 19 14C19 14.7264 18.6062 15.3956 17.9713 15.7483L8.9712 20.7484C8.6741 20.9134 8.3397 21 8 21C6.8954 21 6 20.1046 6 19L6 9C6 7.8954 6.8954 7 8 7C8.3397 7 8.6741 7.0866 8.9712 7.2516Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w_trobb5a {
  d: path("M2 14L7 14M18 14L22 14M13 4L13 10.6338");
}
</style><g class="nrj6p8qat"><path class="eq2lywkqe"/><path class="w_trobb5a"/></g>`,
		"fallback": "keyline-icons:gate-buffer-tri-state-duotone",
	});
}

export default Component;
