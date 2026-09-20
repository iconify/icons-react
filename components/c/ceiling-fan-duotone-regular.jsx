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
		"content": `<style>.bkhpo871l {
  fill: currentColor;
  d: path("M10 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.inp4fsk2w {
  d: path("M10 9C6 7 4 6 3 6v6c2 -1 5 -2 7 -3");
}

.itacx93td {
  d: path("M12 11c-1 4 -2 6 -2 7h5c-1 -3 -2 -6 -3 -7");
}

.knutrfbbz {
  fill: currentColor;
  d: path("M14 9c4 -2 6 -3 7 -3v6c-2 -1 -5 -2 -7 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nx1p4-0ck {
  fill: currentColor;
  d: path("M10 9C6 7 4 6 3 6v6c2 -1 5 -2 7 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q3srlnbfr {
  d: path("M12 2v5");
}

.rgnzqrbbr {
  fill: currentColor;
  d: path("M12 11c-1 4 -2 6 -2 7h5c-1 -3 -2 -6 -3 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z11aaub_a {
  d: path("M14 9c4 -2 6 -3 7 -3v6c-2 -1 -5 -2 -7 -3");
}

.zesrtccnv {
  d: path("M10 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="bkhpo871l"/><path class="nx1p4-0ck"/><path class="knutrfbbz"/><path class="rgnzqrbbr"/><path class="q3srlnbfr"/><path class="zesrtccnv"/><path class="inp4fsk2w"/><path class="z11aaub_a"/><path class="itacx93td"/></g>`,
		"fallback": "iconmind:ceiling-fan-duotone-regular",
	});
}

export default Component;
