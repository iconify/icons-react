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
		"content": `<style>.mfxx9es5a {
  stroke-opacity: 0.4;
  d: path("M13 7L2.7396 7M6.8947 12L2.1367 7.3241C1.9544 7.1451 1.9544 6.8549 2.1367 6.6759L6.8947 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s-mrsxbhh {
  d: path("M11 17L21.2604 17M17.1053 12L21.8633 16.6759C22.0456 16.8549 22.0456 17.1451 21.8633 17.3241L17.1053 22");
}
</style><g class="nrj6p8qat"><path class="mfxx9es5a"/><path class="s-mrsxbhh"/></g>`,
		"fallback": "keyline-icons:arrow-left-right-3-duotone",
	});
}

export default Component;
