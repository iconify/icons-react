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
		"content": `<style>.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jogx49x6i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k7g3kwg9m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nu6kj0bjf {
  d: path("M16 11v7");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pma7fkjmg {
  d: path("M8 11v7");
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.r3faxubne {
  d: path("M4 4v16");
}

.ru_nxnbim {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="k7g3kwg9m"/><path class="jogx49x6i"/><path class="ru_nxnbim"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="pma7fkjmg"/><path class="r-3ib9fxz"/><path class="nu6kj0bjf"/></g>`,
		"fallback": "iconmind:demographic-parity-duotone-regular",
	});
}

export default Component;
