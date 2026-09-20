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

.ju63gachf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 15h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ka5ob16ei {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 8 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kzvibbczt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nooweob_o {
  d: path("M3 10h12");
}

.pzkkb1bdt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnebkmpov {
  d: path("m18 8 2 -2 -2 -2");
}

.sz1k7cmme {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 16 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u9z5qccfn {
  d: path("M3 15h12");
}

.z5jtjknvm {
  d: path("M3 5h12");
}

.zbj6wacas {
  d: path("m18 16 2 -2 -2 -2");
}
</style><g class="hntgybcog"><path class="kzvibbczt"/><path class="pzkkb1bdt"/><path class="ju63gachf"/><path class="ka5ob16ei"/><path class="sz1k7cmme"/><path class="z5jtjknvm"/><path class="nooweob_o"/><path class="u9z5qccfn"/><path class="qnebkmpov"/><path class="zbj6wacas"/></g>`,
		"fallback": "iconmind:index-warm-duotone-thin",
	});
}

export default Component;
