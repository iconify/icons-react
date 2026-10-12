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
		"content": `<style>.h3cjjobln {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.05 10.36a4.25 4.25 0 1 0 3.57 7.66a1.15 1.15 0 0 0-.74-2.17a3.75 3.75 0 0 1-1.64-3.52a1.15 1.15 0 0 0-1.19-1.97");
}

.j5rul6sow {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.06 13.15h.01");
}

.o6a500beq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z-29j8bnt {
  width: 12.5px;
  height: 18.5px;
  x: 5.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}
</style><g class="y9tr6bcfx"><rect class="z-29j8bnt"/><path class="o6a500beq"/><path class="h3cjjobln"/><path class="j5rul6sow"/></g>`,
		"fallback": "iconoven:do-not-disturb",
	});
}

export default Component;
