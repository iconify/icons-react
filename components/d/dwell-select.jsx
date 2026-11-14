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
		"content": `<style>.a88uu03mv {
  d: path("M12 2.5A9.5 9.5 0 1 1 2.5 12");
}

.kyggbwbsy {
  d: path("M6 12c1.75-3.25 3.75-4.5 6-4.5s4.25 1.25 6 4.5c-1.75 3.25-3.75 4.5-6 4.5S7.75 15.25 6 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdo1j_06c {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="a88uu03mv"/><path class="kyggbwbsy"/><path class="vdo1j_06c"/></g>`,
		"fallback": "uix-sharp:dwell-select",
	});
}

export default Component;
