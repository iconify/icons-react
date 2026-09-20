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
		"content": `<style>.a1go-lhea {
  d: path("m21 13 -5 5");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.i0kstcmkz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m21 13 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k58vknb8e {
  d: path("m16 13 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rjb6iab1i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t2-tujbrn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 3h9l-3 3 3 3H6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tkvxdludj {
  d: path("M6 3h9l-3 3 3 3H6");
}

.uns5hvbar {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 13 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="rjb6iab1i"/><path class="t2-tujbrn"/><path class="uns5hvbar"/><path class="i0kstcmkz"/><path class="ftqzjnb8u"/><path class="tkvxdludj"/><path class="k58vknb8e"/><path class="a1go-lhea"/></g>`,
		"fallback": "iconmind:checkpoint-failed-duotone-regular",
	});
}

export default Component;
