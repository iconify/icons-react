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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.jdqylbbkf {
  d: path("m9 14 2 2 4 -4");
}

.ku_telleq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ntbbvlkxf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 14 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wog2376vd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wywiukbgn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wywiukbgn"/><path class="ku_telleq"/><path class="wog2376vd"/><path class="ntbbvlkxf"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="l0zc9ibud"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:coverage-line-duotone-regular",
	});
}

export default Component;
