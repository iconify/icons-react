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
		"content": `<style>.dj91tzban {
  d: path("M6 17h8");
}

.e-07m9b9c {
  d: path("M6 11h12");
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yih0nfb7c {
  d: path("M3 14h18");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="zrwkhybyf"/><path class="yih0nfb7c"/><path class="f8gsx7b5s"/><path class="e-07m9b9c"/><path class="dj91tzban"/></g>`,
		"fallback": "iconmind:holdout-outline-thin",
	});
}

export default Component;
