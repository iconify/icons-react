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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.hqu8-q-5e {
  d: path("M3 3h18");
}

.hrx9ocrcd {
  d: path("M7 14h10v4H7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ug6ab3blx {
  d: path("M7 6h10v4H7Z");
}
</style><g class="nrj6p8qat"><path class="hqu8-q-5e"/><path class="ug6ab3blx"/><path class="hrx9ocrcd"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:align-vertical-space-between-outline-regular",
	});
}

export default Component;
