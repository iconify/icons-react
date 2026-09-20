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
		"content": `<style>.ftqzjnb8u {
  d: path("M6 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qnhyftzmc {
  d: path("M6 5h12v7H6");
}
</style><g class="nrj6p8qat"><path class="ftqzjnb8u"/><path class="qnhyftzmc"/></g>`,
		"fallback": "iconmind:checkpoint-outline-regular",
	});
}

export default Component;
