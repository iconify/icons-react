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
		"content": `<style>.e5cr-sbks {
  d: path("M11 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
}

.hqz06wx0a {
  fill: currentColor;
  d: path("M11 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lycull7vp {
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wbetb-bqz {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wbetb-bqz"/><path class="hqz06wx0a"/><path class="lycull7vp"/><path class="e5cr-sbks"/></g>`,
		"fallback": "iconmind:deduplicate-duotone-regular",
	});
}

export default Component;
