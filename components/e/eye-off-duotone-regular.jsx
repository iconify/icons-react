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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.emvotkb4z {
  d: path("M4 20 20 4");
}

.kti78mmln {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q4dbwx7ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x5i0m055t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="nrj6p8qat"><path class="dktry7bqc"/><path class="q4dbwx7ej"/><path class="kti78mmln"/><path class="x5i0m055t"/><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="bo51iypxr"/><path class="emvotkb4z"/></g>`,
		"fallback": "iconmind:eye-off-duotone-regular",
	});
}

export default Component;
