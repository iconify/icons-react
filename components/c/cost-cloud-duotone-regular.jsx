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
		"content": `<style>.ezg__mbcy {
  fill: currentColor;
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ki3b7s-pe {
  d: path("M16 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ls7ugdcwr {
  d: path("M6 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m7ezp3bui {
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qav-szbxx {
  fill: currentColor;
  d: path("M16 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u7txllb2z {
  fill: currentColor;
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wko3ej0az {
  fill: currentColor;
  d: path("M6 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="u7txllb2z"/><path class="wko3ej0az"/><path class="ezg__mbcy"/><path class="qav-szbxx"/><path class="m7ezp3bui"/><path class="ls7ugdcwr"/><path class="if5ft31dv"/><path class="ki3b7s-pe"/></g>`,
		"fallback": "iconmind:cost-cloud-duotone-regular",
	});
}

export default Component;
