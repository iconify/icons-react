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
		"content": `<style>.atyo14tkp {
  d: path("M8 8h8v5H8Z");
}

.fjiurnzxd {
  d: path("M12 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6r7zygac {
  d: path("M8 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yvgc3wkxj {
  d: path("M5 21V5h14v16Z");
}
</style><g class="hntgybcog"><path class="yvgc3wkxj"/><path class="atyo14tkp"/><path class="i6r7zygac"/><path class="fjiurnzxd"/></g>`,
		"fallback": "iconmind:arcade-outline-thin",
	});
}

export default Component;
