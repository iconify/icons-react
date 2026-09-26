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
		"content": `<style>.alpsapn4b {
  d: path("M6 18V6M2 10L5.6464 6.3536C5.8417 6.1583 6.1583 6.1583 6.3536 6.3536L10 10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q7ot8ryau {
  stroke-opacity: 0.4;
  d: path("M14 6H22M14 10H20M14 14H18M14 18H16");
}
</style><g class="nrj6p8qat"><path class="q7ot8ryau"/><path class="alpsapn4b"/></g>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-two-tone",
	});
}

export default Component;
