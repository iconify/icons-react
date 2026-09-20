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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.gzjf714fp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hu1l55dbx {
  d: path("M9.5 15.5 12 13l2.5 2.5");
}

.ko83pxbrp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 15.5 12 13l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mbemg4bbx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 8.5 12 11l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pr37be5vj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pr37be5vj"/><path class="gzjf714fp"/><path class="mbemg4bbx"/><path class="ko83pxbrp"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="n_1n94xtx"/><path class="hu1l55dbx"/></g>`,
		"fallback": "iconmind:compress-context-duotone-regular",
	});
}

export default Component;
