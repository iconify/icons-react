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
		"content": `<style>.bnhdslb0j {
  d: path("M19 8v6");
}

.c_xbbkb0k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fem_64cmj {
  d: path("M3 8v6");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.j3gnacbje {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kfyfc0bjf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.smcfdu4zn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wfd9yacqd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xubfi0bjs {
  d: path("M11 8v6");
}

.z6x67ktzg {
  d: path("M6 8v6");
}
</style><g class="nrj6p8qat"><path class="c_xbbkb0k"/><path class="j3gnacbje"/><path class="smcfdu4zn"/><path class="kfyfc0bjf"/><path class="wfd9yacqd"/><path class="fem_64cmj"/><path class="z6x67ktzg"/><path class="xubfi0bjs"/><path class="bnhdslb0j"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:backoff-exponential-duotone-regular",
	});
}

export default Component;
