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
		"content": `<style>.aoorvnbzq {
  d: path("m14 7 4 4 -4 4");
}

.e-eh9i0mi {
  d: path("m9 19 2 2 4 -4");
}

.es38kmbcf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 7 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f-dt54bbr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 19 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lrkxnckco {
  d: path("m8 7 -4 4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wcy_h2c1w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 7 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="es38kmbcf"/><path class="wcy_h2c1w"/><path class="f-dt54bbr"/><path class="lrkxnckco"/><path class="aoorvnbzq"/><path class="e-eh9i0mi"/></g>`,
		"fallback": "iconmind:code-review-duotone-regular",
	});
}

export default Component;
