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
		"content": `<style>.dlpk0pdin {
  d: path("m3.5 10.5l8.5 5l8.5-5");
}

.fni79ccee {
  d: path("M6.5 7.75L3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8l-3.5-2.25");
}

.gbf6dccar {
  d: path("M6.5 12.25V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7.75M9.5 7h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fni79ccee"/><path class="dlpk0pdin"/><path class="gbf6dccar"/></g>`,
		"fallback": "uix:envelope-open-letter",
	});
}

export default Component;
