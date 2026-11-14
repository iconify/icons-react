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

.rdqjsh1rs {
  d: path("M8.5 2.5h7A1.5 1.5 0 0 1 17 4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 4a1.5 1.5 0 0 1 1.5-1.5m-1 3V7Q5 8 5 10.5V19q0 2.5 2.5 2.5h9q2.5 0 2.5-2.5v-8.5Q19 8 16.5 7V5.5");
}

.xdpzootib {
  d: path("M10 5.5v8q0 2 2 2t2-2v-8m-9 13h14");
}
</style><g class="hntgybcog"><path class="rdqjsh1rs"/><path class="xdpzootib"/></g>`,
		"fallback": "uix:cold-brew-jar",
	});
}

export default Component;
