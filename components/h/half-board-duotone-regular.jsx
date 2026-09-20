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
		"content": `<style>.akhe8vn1q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 15h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ixi7zdzcw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 15a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kslamcc-z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l2nbo7bgf {
  d: path("M4 15a8 8 0 0 1 16 0");
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olqfcgidt {
  d: path("M6 19h12");
}

.tla8vyn6c {
  d: path("M12 7v8");
}

.x043no3hn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 19h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ixi7zdzcw"/><path class="akhe8vn1q"/><path class="kslamcc-z"/><path class="x043no3hn"/><path class="l2nbo7bgf"/><path class="l8dn9jbyp"/><path class="tla8vyn6c"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:half-board-duotone-regular",
	});
}

export default Component;
