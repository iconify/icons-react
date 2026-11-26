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
		"content": `<style>.hi_y07b4g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 6L11 6C12.6569 6 14 7.3431 14 9L14 15C14 16.6569 12.6569 18 11 18L5 18C3.3431 18 2 16.6569 2 15L2 9C2 7.3431 3.3431 6 5 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.shy9kldmf {
  d: path("M3 3H21M3 21H21M17 9H21M17 15H21");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="hi_y07b4g"/><path class="shy9kldmf"/></g>`,
		"fallback": "keyline-icons:image-wrap-left-fill",
	});
}

export default Component;
