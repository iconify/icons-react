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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qnhyftzmc {
  d: path("M6 5h12v7H6");
}
</style><g class="hntgybcog"><path class="ftqzjnb8u"/><path class="qnhyftzmc"/></g>`,
		"fallback": "iconmind:checkpoint-outline-thin",
	});
}

export default Component;
