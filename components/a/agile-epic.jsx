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
		"content": `<style>.b-m78xnig {
  d: path("M14.5 2.5L4.5 14h7l-2 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zprq61b6i {
  d: path("m9.5 21.5l10-11.5h-7l2-7.5");
}
</style><g class="hntgybcog"><path class="b-m78xnig"/><path class="zprq61b6i"/></g>`,
		"fallback": "uix:agile-epic",
	});
}

export default Component;
