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
		"content": `<style>.frt61khkq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 20v-6h5v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iepbicc-q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 20V8h5v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.nn2mbucfp {
  d: path("M5 20V8h5v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.p9olxmbrk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pga6n1bci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wwyi7ubez {
  d: path("M14 20v-6h5v6");
}
</style><g class="nrj6p8qat"><path class="pga6n1bci"/><path class="iepbicc-q"/><path class="frt61khkq"/><path class="p9olxmbrk"/><path class="jkuojibnm"/><path class="nn2mbucfp"/><path class="wwyi7ubez"/><path class="om9c7ck0x"/></g>`,
		"fallback": "iconmind:budget-vs-actual-duotone-regular",
	});
}

export default Component;
