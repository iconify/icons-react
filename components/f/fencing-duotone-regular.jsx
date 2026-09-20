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
		"content": `<style>.dz69xhbbh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 4 5 20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ndosv0bel {
  fill: currentColor;
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0uia_bgu {
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.u1gt5absq {
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uima5nbka {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uwi1_aczt {
  d: path("M21 4 5 20");
}

.v4_esibhq {
  fill: currentColor;
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="nrj6p8qat"><path class="ndosv0bel"/><path class="v4_esibhq"/><path class="uima5nbka"/><path class="dz69xhbbh"/><path class="ywch90sba"/><path class="uwi1_aczt"/><path class="u1gt5absq"/><path class="r0uia_bgu"/></g>`,
		"fallback": "iconmind:fencing-duotone-regular",
	});
}

export default Component;
