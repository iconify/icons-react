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
		"content": `<style>.lxc0b_rlj {
  d: path("M5 10a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.lzs7oacss {
  fill: currentColor;
  d: path("M5 10a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.p0_y5_ieo {
  d: path("M6 17v4");
}

.rb6wzfbrj {
  d: path("M12 10V5");
}

.tbr--mb3k {
  fill: currentColor;
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tyc7ybeyo {
  d: path("M18 17v4");
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="lzs7oacss"/><path class="tbr--mb3k"/><path class="lxc0b_rlj"/><path class="xedmbxbzm"/><path class="rb6wzfbrj"/><path class="p0_y5_ieo"/><path class="tyc7ybeyo"/><path class="ok9ioqb8x"/></g>`,
		"fallback": "iconmind:gas-meter-duotone-regular",
	});
}

export default Component;
