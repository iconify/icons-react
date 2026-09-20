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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.ek-dmkblk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11.5 9.5 15 13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hob4evbuj {
  d: path("M9 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hrabrxb6m {
  d: path("M11.5 9.5 15 13");
}

.ieioa6bqm {
  fill: currentColor;
  d: path("M9 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qlvopac9f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnvjj7b8l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ieioa6bqm"/><path class="qlvopac9f"/><path class="qnvjj7b8l"/><path class="ek-dmkblk"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="hob4evbuj"/><path class="hrabrxb6m"/></g>`,
		"fallback": "iconmind:find-checkpoint-duotone-regular",
	});
}

export default Component;
