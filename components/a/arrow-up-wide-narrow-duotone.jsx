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

.lbe7xcbft {
  d: path("M6 18L6 6M2 10L5.6464 6.3536C5.8417 6.1583 6.1583 6.1583 6.3536 6.3536L10 10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ie7-rmbwb"/><path class="lbe7xcbft"/></g>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-duotone",
	});
}

export default Component;
