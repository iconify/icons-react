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
		"content": `<style>.el0n_ccnv {
  d: path("M8 5v14");
}

.g6ulbfs0a {
  d: path("M15 11h6");
}

.l517yxbln {
  d: path("M12 9v6");
}

.lbz2yq5no {
  d: path("M4 9v6");
}

.n4e83dijt {
  d: path("M18 8v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lbz2yq5no"/><path class="el0n_ccnv"/><path class="l517yxbln"/><path class="n4e83dijt"/><path class="g6ulbfs0a"/></g>`,
		"fallback": "iconmind:audio-gen-outline-regular",
	});
}

export default Component;
