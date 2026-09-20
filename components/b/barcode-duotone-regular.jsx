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
		"content": `<style>.ap9tz-pvm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ay0-xnb_u {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.azgrucbqu {
  d: path("M7 5v14");
}

.btdmtu_xg {
  d: path("M14 5v14");
}

.j5yfc7b4j {
  d: path("M11 5v14");
}

.l267babnk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nkim8cbjd {
  d: path("M4 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ro7j5915f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vckqcjbbb {
  d: path("M18 5v14");
}

.yd5tqobrd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ap9tz-pvm"/><path class="ay0-xnb_u"/><path class="l267babnk"/><path class="ro7j5915f"/><path class="yd5tqobrd"/><path class="nkim8cbjd"/><path class="azgrucbqu"/><path class="j5yfc7b4j"/><path class="btdmtu_xg"/><path class="vckqcjbbb"/></g>`,
		"fallback": "iconmind:barcode-duotone-regular",
	});
}

export default Component;
