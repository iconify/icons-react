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
		"content": `<style>.f6bqqhboc {
  d: path("m12 16l-3.5-3.5A2.5 2.5 0 0 1 12 9a2.5 2.5 0 0 1 3.5 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kl95xk0ph {
  d: path("m12 2.5l7.5 3v6c0 5-3.5 8.25-7.5 10c-4-1.75-7.5-5-7.5-10v-6Z");
}
</style><g class="hntgybcog"><path class="kl95xk0ph"/><path class="f6bqqhboc"/></g>`,
		"fallback": "uix:blameless",
	});
}

export default Component;
