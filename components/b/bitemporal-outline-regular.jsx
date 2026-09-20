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
		"content": `<style>.ce9iv3bun {
  d: path("M4 3v17");
}

.ks612kq_w {
  d: path("m7 17 5 -5");
}

.mnv4pvbmf {
  d: path("m12 12 6 -6");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rw2cw9fuy {
  d: path("M4 20h17");
}
</style><g class="nrj6p8qat"><path class="ce9iv3bun"/><path class="rw2cw9fuy"/><path class="ks612kq_w"/><path class="mnv4pvbmf"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:bitemporal-outline-regular",
	});
}

export default Component;
