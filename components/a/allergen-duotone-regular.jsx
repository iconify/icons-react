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
		"content": `<style>.k187sabpz {
  d: path("M2 11h20");
}

.kpavcn10r {
  d: path("M21 11a9 9 0 0 1 -18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o70nty8gv {
  d: path("m12 2 7 7H5Z");
}

.tv5rv9b5z {
  fill: currentColor;
  d: path("m12 2 7 7H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="tv5rv9b5z"/><path class="k187sabpz"/><path class="kpavcn10r"/><path class="o70nty8gv"/></g>`,
		"fallback": "iconmind:allergen-duotone-regular",
	});
}

export default Component;
