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
		"content": `<style>.asd1gsbjs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c_sz-g7tz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 8 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h91kiclib {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m18 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.kaj4_cbkd {
  d: path("m6 8 4 4 -4 4");
}

.kes5k2fvf {
  d: path("m18 8 -4 4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwdk136nn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="asd1gsbjs"/><path class="c_sz-g7tz"/><path class="nwdk136nn"/><path class="h91kiclib"/><path class="jcxg2bbvb"/><path class="kaj4_cbkd"/><path class="jlfl_ccwj"/><path class="kes5k2fvf"/></g>`,
		"fallback": "iconmind:contradiction-duotone-regular",
	});
}

export default Component;
