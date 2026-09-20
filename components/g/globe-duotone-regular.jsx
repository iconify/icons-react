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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.kgi0c0b8x {
  d: path("M12 3a6 9 0 0 0 0 18 6 9 0 0 0 0 -18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.wb15f6qev {
  fill: currentColor;
  d: path("M12 3a6 9 0 0 0 0 18 6 9 0 0 0 0 -18");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zhy5nnbig"/><path class="wb15f6qev"/><path class="o_ssmh9ez"/><path class="ae-e09b3w"/><path class="kgi0c0b8x"/></g>`,
		"fallback": "iconmind:globe-duotone-regular",
	});
}

export default Component;
