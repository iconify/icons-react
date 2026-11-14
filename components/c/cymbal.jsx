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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzy5t1_tn {
  d: path("M2.5 8a9.5 2.5 0 1 0 19 0a9.5 2.5 0 1 0-19 0");
}

.o69cgybzd {
  d: path("M12 7.5a2 2 0 0 1 0-4m0 7v11m-4.5 0L12 17l4.5 4.5");
}
</style><g class="hntgybcog"><path class="jzy5t1_tn"/><path class="o69cgybzd"/></g>`,
		"fallback": "uix:cymbal",
	});
}

export default Component;
