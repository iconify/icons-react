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
		"content": `<style>.gmt9v6yoq {
  d: path("M8 2v11");
}

.hqhft7uvy {
  fill: currentColor;
  d: path("M3 21v-3h3.5L9 15.5h6l2.5 2.5H21v3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kjupc8bnz {
  d: path("M3 21v-3h3.5L9 15.5h6l2.5 2.5H21v3Z");
}

.m2gd490yo {
  d: path("M8 2h4l3.5 3.5V8L12 11.5H8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hqhft7uvy"/><path class="gmt9v6yoq"/><path class="m2gd490yo"/><path class="kjupc8bnz"/></g>`,
		"fallback": "iconmind:free-parking-duotone-regular",
	});
}

export default Component;
