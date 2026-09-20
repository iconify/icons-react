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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.osdsz4bam {
  d: path("M13 14h5");
}

.y4-ssjnrw {
  d: path("M13 8v12");
}
</style><g class="hntgybcog"><path class="aj1uncbqw"/><path class="y4-ssjnrw"/><path class="om9c7ck0x"/><path class="osdsz4bam"/></g>`,
		"fallback": "iconmind:degree-fahrenheit-outline-thin",
	});
}

export default Component;
