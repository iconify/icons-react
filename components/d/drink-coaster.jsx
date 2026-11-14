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
		"content": `<style>.fblnu-b5k {
  d: path("M7.5 13a9.5 3.5 0 0 0-5 3a9.5 3.5 0 0 0 19 0a9.5 3.5 0 0 0-6-3.25");
}

.j3320rbat {
  d: path("M7.5 4h8v9.5A2.5 2.5 0 0 1 13 16h-3a2.5 2.5 0 0 1-2.5-2.5Zm8 2h.5a2.25 2.25 0 0 1 0 4.5h-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fblnu-b5k"/><path class="j3320rbat"/></g>`,
		"fallback": "uix-sharp:drink-coaster",
	});
}

export default Component;
