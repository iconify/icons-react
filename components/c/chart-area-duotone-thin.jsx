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

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rjnb3gzmu {
  d: path("m7 14 3 -3 4 4 6 -6v8H7Z");
}

.xlwvpo0fs {
  fill: currentColor;
  d: path("m7 14 3 -3 4 4 6 -6v8H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xlwvpo0fs"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="rjnb3gzmu"/></g>`,
		"fallback": "iconmind:chart-area-duotone-thin",
	});
}

export default Component;
