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
		"content": `<style>.jy6szs4_u {
  d: path("M19 22V13M16 16L19 13L22 16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1w0lr-sm {
  stroke-opacity: 0.4;
  d: path("M2 14L3.7857 9L6.0583 2.668C6.3743 1.783 7.6257 1.783 7.9417 2.668L10.2143 9L12 14M10.2143 9H3.7857M22 6C22 7.657 20.6569 9 19 9C17.3431 9 16 7.657 16 6C16 4.343 17.3431 3 19 3C20.6569 3 22 4.343 22 6ZM22 6V2M22 6V9");
}
</style><g class="nrj6p8qat"><path class="q1w0lr-sm"/><path class="jy6szs4_u"/></g>`,
		"fallback": "keyline-icons:baseline-shift-duotone",
	});
}

export default Component;
