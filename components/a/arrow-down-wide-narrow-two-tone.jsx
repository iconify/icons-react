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

.oeb9303bc {
  d: path("M6 6V18M2 14L5.6464 17.6464C5.8417 17.8417 6.1583 17.8417 6.3536 17.6464L10 14");
}

.q7ot8ryau {
  stroke-opacity: 0.4;
  d: path("M14 6H22M14 10H20M14 14H18M14 18H16");
}
</style><g class="nrj6p8qat"><path class="q7ot8ryau"/><path class="oeb9303bc"/></g>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-two-tone",
	});
}

export default Component;
