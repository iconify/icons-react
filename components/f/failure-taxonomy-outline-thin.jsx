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
		"content": `<style>.ciftp4wvv {
  d: path("m13 11.5 2.5 2.5");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.go1co5b_o {
  d: path("M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxf8tnb0e {
  d: path("M11 11.5 8.5 14");
}
</style><g class="hntgybcog"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="go1co5b_o"/><path class="vxf8tnb0e"/><path class="ciftp4wvv"/></g>`,
		"fallback": "iconmind:failure-taxonomy-outline-thin",
	});
}

export default Component;
