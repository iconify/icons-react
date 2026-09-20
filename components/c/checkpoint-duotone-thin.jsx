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

.ja0_o1hya {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o53lhrb2a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 5h12v7H6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnhyftzmc {
  d: path("M6 5h12v7H6");
}
</style><g class="hntgybcog"><path class="ja0_o1hya"/><path class="o53lhrb2a"/><path class="ftqzjnb8u"/><path class="qnhyftzmc"/></g>`,
		"fallback": "iconmind:checkpoint-duotone-thin",
	});
}

export default Component;
