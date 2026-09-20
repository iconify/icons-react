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
		"content": `<style>.bwrecrsdv {
  d: path("M15 14h4");
}

.dm6j51bgi {
  d: path("m16 11 3 3 -3 3");
}

.h4mbgmbqx {
  d: path("M12 2H5v16h8");
}

.n7l2ayblh {
  fill: currentColor;
  d: path("M14 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
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

.v04-rubun {
  d: path("M14 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="n7l2ayblh"/><path class="h4mbgmbqx"/><path class="bwrecrsdv"/><path class="dm6j51bgi"/><path class="v04-rubun"/></g>`,
		"fallback": "iconmind:document-parse-duotone-regular",
	});
}

export default Component;
