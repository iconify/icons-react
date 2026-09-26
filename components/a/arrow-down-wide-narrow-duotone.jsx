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
		"content": `<style>.ie7-rmbwb {
  stroke-opacity: 0.4;
  d: path("M14 6L22 6M14 10L20 10M14 14L18 14M14 18L16 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xz-w_6buo {
  d: path("M6 6L6 18M2 14L5.6464 17.6464C5.8417 17.8417 6.1583 17.8417 6.3536 17.6464L10 14");
}
</style><g class="nrj6p8qat"><path class="ie7-rmbwb"/><path class="xz-w_6buo"/></g>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-duotone",
	});
}

export default Component;
