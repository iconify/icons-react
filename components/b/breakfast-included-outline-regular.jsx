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
		"content": `<style>.dp_v0obrq {
  d: path("M8 3v3");
}

.fb8er8b7t {
  d: path("M14 9a2.5 2.5 0 0 1 0 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.rnz95vbcp {
  d: path("M6 8v7h8V8Z");
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="nrj6p8qat"><path class="rnz95vbcp"/><path class="fb8er8b7t"/><path class="o8od38cnm"/><path class="dp_v0obrq"/><path class="yazo7scbq"/></g>`,
		"fallback": "iconmind:breakfast-included-outline-regular",
	});
}

export default Component;
