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
		"content": `<style>.ke3ma707p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l-gv5l26x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.o50_pabww {
  d: path("m16 12 2 2 4 -4");
}

.ox5l_oflw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pvfbz5b4i {
  d: path("M3 18h11");
}

.vul_uwbfe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x22av82oi {
  d: path("M3 12h11");
}
</style><g class="nrj6p8qat"><path class="vul_uwbfe"/><path class="ox5l_oflw"/><path class="l-gv5l26x"/><path class="ke3ma707p"/><path class="nrqy16b7j"/><path class="x22av82oi"/><path class="pvfbz5b4i"/><path class="o50_pabww"/></g>`,
		"fallback": "iconmind:data-quality-duotone-regular",
	});
}

export default Component;
