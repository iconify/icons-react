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
		"content": `<style>.f0lu7bcgk {
  d: path("M3 8v11h7V8Z");
}

.lmdddlr1e {
  d: path("M4 5h5");
}

.mzz93ed1z {
  d: path("M14 8v11h7V8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7w3a5bcn {
  d: path("M15 5h5");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="nrj6p8qat"><path class="f0lu7bcgk"/><path class="mzz93ed1z"/><path class="y0y0ccsoe"/><path class="lmdddlr1e"/><path class="p7w3a5bcn"/></g>`,
		"fallback": "iconmind:binoculars-outline-regular",
	});
}

export default Component;
