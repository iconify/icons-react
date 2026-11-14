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
		"content": `<style>.bts50i7or {
  d: path("M9 17.5V12c0-1.7 1.3-3 3-3s3 1.3 3 3v1.5c0 2.5.5 4 1 5.5");
}

.f8u3pdbln {
  d: path("M3.5 12c0-5 4-8.5 8.5-8.5S20.5 7 20.5 12v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kqqp8ptag {
  d: path("M6 11c0-3.5 2.5-6 6-6s6 2.5 6 6v2");
}

.r4f6rcipv {
  d: path("M12 12v4c0 2 .5 3.5 1 5");
}
</style><g class="hntgybcog"><path class="kqqp8ptag"/><path class="bts50i7or"/><path class="r4f6rcipv"/><path class="f8u3pdbln"/></g>`,
		"fallback": "uix:biometric-fingerprint",
	});
}

export default Component;
