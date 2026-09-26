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
		"content": `<style>.lbe7xcbft {
  d: path("M6 18L6 6M2 10L5.6464 6.3536C5.8417 6.1583 6.1583 6.1583 6.3536 6.3536L10 10");
}

.nrj6p8qat {
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
</style><g class="nrj6p8qat"><path class="vpj4m7rea"/><path class="lbe7xcbft"/></g>`,
		"fallback": "keyline-icons:arrow-up-narrow-wide-duotone",
	});
}

export default Component;
