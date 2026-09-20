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

.jnxnbxa0b {
  d: path("M5 3v5");
}

.ld5dubbqb {
  d: path("M17.5 13v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
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
</style><g class="nrj6p8qat"><path class="jnxnbxa0b"/><path class="x_7wq3p0y"/><path class="z_c7updjp"/><path class="xtgfndbtr"/><path class="hk70mwb8s"/><path class="ld5dubbqb"/></g>`,
		"fallback": "iconmind:fork-knife-outline-regular",
	});
}

export default Component;
