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
		"content": `<style>.gjg57ibhd {
  fill: currentColor;
  d: path("M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kc5-9ib3u {
  d: path("M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.lyyswacbl {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.m1b4e0b4z {
  d: path("M6 11h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uhkv12boy {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uxsptjbvt {
  d: path("M6 7h12");
}
</style><g class="nrj6p8qat"><path class="uhkv12boy"/><path class="gjg57ibhd"/><path class="lyyswacbl"/><path class="uxsptjbvt"/><path class="m1b4e0b4z"/><path class="kc5-9ib3u"/></g>`,
		"fallback": "iconmind:certificate-x509-duotone-regular",
	});
}

export default Component;
