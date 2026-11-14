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
		"content": `<style>.bl3497szx {
  d: path("m10.875 12.875l.064-.064a1.5 1.5 0 0 1 2.122 0l.064.064A.659.659 0 0 1 12.659 14h-1.318a.659.659 0 0 1-.466-1.125");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwgk8l3ak {
  d: path("M2.5 14L12 4l9.5 10");
}

.p3xmfebiu {
  d: path("M5 21.5V15l7-7.5l7 7.5v6.5");
}
</style><g class="hntgybcog"><path class="kwgk8l3ak"/><path class="p3xmfebiu"/><path class="bl3497szx"/></g>`,
		"fallback": "uix:gable-roof",
	});
}

export default Component;
