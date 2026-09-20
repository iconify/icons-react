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
		"content": `<style>.jrxkmybti {
  d: path("m6 17 4 -4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.ofkku1-2v {
  d: path("m15 7 4 4");
}

.syhq6ybmm {
  d: path("m19 7 -4 4");
}
</style><g class="nrj6p8qat"><path class="o72p0hsyz"/><path class="jrxkmybti"/><path class="ofkku1-2v"/><path class="syhq6ybmm"/></g>`,
		"fallback": "iconmind:background-remove-outline-regular",
	});
}

export default Component;
