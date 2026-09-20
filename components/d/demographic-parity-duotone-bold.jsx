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
		"content": `<style>.aivex_sgq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.et2ai2bem {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nu6kj0bjf {
  d: path("M16 11v7");
}

.oifr9zbpt {
  d: path("M4 20h16");
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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yus0vqbkj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="aivex_sgq"/><path class="yus0vqbkj"/><path class="et2ai2bem"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="pma7fkjmg"/><path class="r-3ib9fxz"/><path class="nu6kj0bjf"/></g>`,
		"fallback": "iconmind:demographic-parity-duotone-bold",
	});
}

export default Component;
