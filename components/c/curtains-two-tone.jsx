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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oodk3pgdl {
  d: path("M3 3H21M4 3V21H20V3M12 3V21M8 3V9M16 3V9");
}

.qifc4j4yw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 2C21.552 2 22 2.448 22 3C22 3.552 21.552 4 21 4V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V4C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H21Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="qifc4j4yw"/><path class="oodk3pgdl"/></g>`,
		"fallback": "keyline-icons:curtains-two-tone",
	});
}

export default Component;
