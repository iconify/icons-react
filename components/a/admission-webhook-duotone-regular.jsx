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
		"content": `<style>.evlaqhbnc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m19 7 -4 4h3l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.knhft4qdm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1o-p0bmq {
  d: path("m19 7 -4 4h3l-4 4");
}

.pga6n1bci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qq9-4ficr {
  d: path("m4 13 9 -9");
}

.rjl8fe1sw {
  d: path("M4 6v14");
}

.s30vxrb5b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 13 9 -9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="knhft4qdm"/><path class="s30vxrb5b"/><path class="pga6n1bci"/><path class="evlaqhbnc"/><path class="rjl8fe1sw"/><path class="qq9-4ficr"/><path class="jkuojibnm"/><path class="o1o-p0bmq"/></g>`,
		"fallback": "iconmind:admission-webhook-duotone-regular",
	});
}

export default Component;
