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
		"content": `<style>.d-23-qb2d {
  d: path("M13 11v9");
}

.di40i1kbs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 7v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ip4hr0bew {
  d: path("M18 15v5");
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.ok_o2hnik {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p86p59b-c {
  d: path("M8 7v13");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.wik6klbxn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 15v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="di40i1kbs"/><path class="ok_o2hnik"/><path class="wik6klbxn"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="p86p59b-c"/><path class="d-23-qb2d"/><path class="ip4hr0bew"/></g>`,
		"fallback": "iconmind:chart-column-decreasing-duotone-regular",
	});
}

export default Component;
