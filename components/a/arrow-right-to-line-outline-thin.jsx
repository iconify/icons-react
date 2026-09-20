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
		"content": `<style>.egsaq3b2f {
  d: path("m12 8 4 4 -4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jka0cfj-k {
  d: path("M4 12h12");
}

.mhila7bcl {
  d: path("M20 7v10");
}
</style><g class="hntgybcog"><path class="mhila7bcl"/><path class="jka0cfj-k"/><path class="egsaq3b2f"/></g>`,
		"fallback": "iconmind:arrow-right-to-line-outline-thin",
	});
}

export default Component;
