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
		"content": `<style>.hk70mwb8s {
  d: path("m16 4 3 3v6h-3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnxnbxa0b {
  d: path("M5 3v5");
}

.ld5dubbqb {
  d: path("M17.5 13v8");
}

.x_7wq3p0y {
  d: path("M9 3v5");
}

.xtgfndbtr {
  d: path("M7 8v13");
}

.z_c7updjp {
  d: path("M5 8h4");
}
</style><g class="hntgybcog"><path class="jnxnbxa0b"/><path class="x_7wq3p0y"/><path class="z_c7updjp"/><path class="xtgfndbtr"/><path class="hk70mwb8s"/><path class="ld5dubbqb"/></g>`,
		"fallback": "iconmind:fork-knife-outline-thin",
	});
}

export default Component;
