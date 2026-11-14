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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iec9sbc1f {
  d: path("M9.25 6.5h6A1.75 1.75 0 0 1 17 8.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 7.5 9.75v-1.5A1.75 1.75 0 0 1 9.25 6.5");
}

.ylblgyb2u {
  d: path("m6.609 6.854l-.234-.104a.8.8 0 0 0-1.125.731v3.038a.8.8 0 0 0 1.125.731l.234-.104A1.5 1.5 0 0 0 7.5 9.775v-1.55a1.5 1.5 0 0 0-.891-1.371M13.5 11.5v4h5.25m0-2.25v4.5");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="iec9sbc1f"/><path class="ylblgyb2u"/></g>`,
		"fallback": "uix:cctv-notice",
	});
}

export default Component;
