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
		"content": `<style>.dwwthkbwn {
  d: path("M2.5 9h3v12h13V9h3");
}

.g455w-y9f {
  d: path("M9.25 15.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m.25-5.5Q7.625 7.875 9.5 6c1.25-1.25 1.25-2.5 0-3.5m5 7.25q-1.875-1.875 0-3.75c1.25-1.25 1.25-2.5 0-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dwwthkbwn"/><path class="g455w-y9f"/></g>`,
		"fallback": "uix:heat-pipe-trench",
	});
}

export default Component;
