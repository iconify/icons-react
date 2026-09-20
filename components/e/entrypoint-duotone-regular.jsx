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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.kktb2pbmr {
  d: path("M8.5 12.5H15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okqi2lbic {
  fill: currentColor;
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sfnyx4wnk {
  d: path("M6 6v14");
}

.skd4f3quy {
  d: path("m12.5 10 2.5 2.5 -2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="okqi2lbic"/><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="kktb2pbmr"/><path class="skd4f3quy"/></g>`,
		"fallback": "iconmind:entrypoint-duotone-regular",
	});
}

export default Component;
