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

.gwhfoytcg {
  d: path("M12 7.5v4");
}

.ku_telleq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.n64-b8b7i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 9.5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qt0z2sbuy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7.5v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v_f8cdb5o {
  d: path("M10 14.5h4");
}

.w4_ysudzy {
  d: path("M10 9.5h4");
}

.wywiukbgn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ycgscdbjc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 14.5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wywiukbgn"/><path class="ku_telleq"/><path class="qt0z2sbuy"/><path class="n64-b8b7i"/><path class="ycgscdbjc"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="gwhfoytcg"/><path class="w4_ysudzy"/><path class="v_f8cdb5o"/></g>`,
		"fallback": "iconmind:http-patch-duotone-regular",
	});
}

export default Component;
