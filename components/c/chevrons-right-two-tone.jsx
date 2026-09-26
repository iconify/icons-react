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
		"content": `<style>.b5by-czkh {
  d: path("M13 17L18 12L13 7");
}

.g-uqi08aq {
  stroke-opacity: 0.4;
  d: path("M6 17L11 12L6 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="g-uqi08aq"/><path class="b5by-czkh"/></g>`,
		"fallback": "keyline-icons:chevrons-right-two-tone",
	});
}

export default Component;
