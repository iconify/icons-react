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
		"content": `<style>.eaabexbql {
  d: path("M3 6v13");
}

.erfjsdmyp {
  d: path("M13.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.f68icieeo {
  fill: currentColor;
  d: path("M13.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hrk2-8-jh {
  fill: currentColor;
  d: path("M3.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jwgl0nbvm {
  d: path("M3.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o178hubwo {
  d: path("m7 15 3 -3h4l3 3");
}

.wcu0lhc9k {
  d: path("M10 8v4");
}
</style><g class="nrj6p8qat"><path class="hrk2-8-jh"/><path class="f68icieeo"/><path class="jwgl0nbvm"/><path class="erfjsdmyp"/><path class="o178hubwo"/><path class="wcu0lhc9k"/><path class="eaabexbql"/></g>`,
		"fallback": "iconmind:bike-share-duotone-regular",
	});
}

export default Component;
