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
		"content": `<style>.fcsl4vbyw {
  d: path("M10 15V6.5h2.5a2.5 2.5 0 0 1 0 5H10m.5 7.5h3");
}

.uldzsundl {
  d: path("M5.5 2h13v20h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uldzsundl"/><path class="fcsl4vbyw"/></g>`,
		"fallback": "uix-sharp:digital-parking-permit",
	});
}

export default Component;
