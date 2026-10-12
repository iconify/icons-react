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
		"content": `<style>.fbm7dgb5u {
  d: path("m12 16.5l-2.5-2.4a1.6 1.6 0 0 1 2.5-2a1.6 1.6 0 0 1 2.5 2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kw7mvsbtj {
  d: path("M4.25 10.6a2 2 0 0 1 .7-1.52l5.75-4.9a2 2 0 0 1 2.6 0l5.75 4.9a2 2 0 0 1 .7 1.52v8.65a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="kw7mvsbtj"/><path class="fbm7dgb5u"/></g>`,
		"fallback": "iconoven:family-home",
	});
}

export default Component;
