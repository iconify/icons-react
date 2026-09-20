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
		"content": `<style>.amgwuybvs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.61 18.58a7 7 0 0 1 0 -13.16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g7oi-dbdt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 2 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gv5xmqiem {
  d: path("M14.39 5.42a7 7 0 0 1 0 13.16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kryf88yqf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.39 5.42a7 7 0 0 1 0 13.16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nuc2dr9ql {
  d: path("m12 16 -3 3 3 3");
}

.qck_wensm {
  d: path("M9.61 18.58a7 7 0 0 1 0 -13.16");
}

.qfez81w4s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 16 -3 3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="kryf88yqf"/><path class="amgwuybvs"/><path class="g7oi-dbdt"/><path class="qfez81w4s"/><path class="gv5xmqiem"/><path class="qck_wensm"/><path class="wzx0dxb2r"/><path class="nuc2dr9ql"/></g>`,
		"fallback": "iconmind:circular-dep-duotone-thin",
	});
}

export default Component;
