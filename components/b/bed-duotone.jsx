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
		"content": `<style>.am3dasbmk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 17L1 9L19 9C21.2091 9 23 10.7909 23 13L23 17Z");
  stroke: none;
}

.eg1tj-bbg {
  d: path("M2 4L2 20M22 16L22 20");
}

.jh83o49ny {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 17L1 9L5 9L5 7C5 5.3431 6.3431 4 8 4L10 4C11.6569 4 13 5.3431 13 7L13 9L19 9C21.2091 9 23 10.7909 23 13L23 17L1 17Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jh83o49ny"/><path clip-rule="evenodd" class="am3dasbmk"/><path class="eg1tj-bbg"/></g>`,
		"fallback": "keyline-icons:bed-duotone",
	});
}

export default Component;
