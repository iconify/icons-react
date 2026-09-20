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
		"content": `<style>.a7vpafiwa {
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nib87abyv {
  d: path("M4 8h12l4 4 -4 4H4Z");
}
</style><g class="hntgybcog"><path class="nib87abyv"/><path class="a7vpafiwa"/></g>`,
		"fallback": "iconmind:box-label-outline-thin",
	});
}

export default Component;
