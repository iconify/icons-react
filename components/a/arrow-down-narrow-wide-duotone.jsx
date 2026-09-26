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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vpj4m7rea {
  stroke-opacity: 0.4;
  d: path("M14 10L18 10M14 14L20 14M14 18L22 18M14 6L16 6");
}

.xz-w_6buo {
  d: path("M6 6L6 18M2 14L5.6464 17.6464C5.8417 17.8417 6.1583 17.8417 6.3536 17.6464L10 14");
}
</style><g class="nrj6p8qat"><path class="vpj4m7rea"/><path class="xz-w_6buo"/></g>`,
		"fallback": "keyline-icons:arrow-down-narrow-wide-duotone",
	});
}

export default Component;
