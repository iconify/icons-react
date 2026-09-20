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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzsvawc8s {
  d: path("m8 8 -4 4 4 4");
}

.jka0cfj-k {
  d: path("M4 12h12");
}

.lnt75bkgi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mhila7bcl {
  d: path("M20 7v10");
}

.ypogw4bqt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zitzxjbtk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zitzxjbtk"/><path class="ypogw4bqt"/><path class="lnt75bkgi"/><path class="mhila7bcl"/><path class="jka0cfj-k"/><path class="hzsvawc8s"/></g>`,
		"fallback": "iconmind:arrow-left-from-line-duotone-thin",
	});
}

export default Component;
