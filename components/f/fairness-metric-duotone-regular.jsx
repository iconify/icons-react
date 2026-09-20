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

.n0oy3lnqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 10v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ndyoa79lx {
  d: path("M9 10v8");
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

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.uyh2m3xyk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 10v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w706_-bdv {
  d: path("M15 10v8");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="uyh2m3xyk"/><path class="n0oy3lnqf"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="ndyoa79lx"/><path class="w706_-bdv"/></g>`,
		"fallback": "iconmind:fairness-metric-duotone-regular",
	});
}

export default Component;
