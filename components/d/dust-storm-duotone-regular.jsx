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
		"content": `<style>.c70ets78r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m19 11 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d483k8bnq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 11h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dc0xg9bgf {
  d: path("M9 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g2d37lfcj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m17 6 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.idl7fxbhb {
  d: path("m17 6 3 -3");
}

.ipwz79qoh {
  d: path("m19 11 3 -3");
}

.j-n1q7bzp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j3lsn4bia {
  d: path("M3 16h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.plajqrbag {
  fill: currentColor;
  d: path("M9 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.timme522h {
  d: path("M3 6h14");
}

.vzfmp7bra {
  d: path("M5 11h14");
}

.wm4k1jmxw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="plajqrbag"/><path class="wm4k1jmxw"/><path class="g2d37lfcj"/><path class="d483k8bnq"/><path class="c70ets78r"/><path class="j-n1q7bzp"/><path class="timme522h"/><path class="idl7fxbhb"/><path class="vzfmp7bra"/><path class="ipwz79qoh"/><path class="j3lsn4bia"/><path class="dc0xg9bgf"/></g>`,
		"fallback": "iconmind:dust-storm-duotone-regular",
	});
}

export default Component;
