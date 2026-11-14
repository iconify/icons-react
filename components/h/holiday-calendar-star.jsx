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
		"content": `<style>.hkugkfbiy {
  d: path("m12 11.75l.75 2.5h2.75l-2 1.75l.75 2.5L12 17l-2.25 1.5l.75-2.5l-2-1.75h2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vspug48qm {
  d: path("M3 4.5h18V21H3Zm5-2v3.75m8-3.75v3.75M3 9h18");
}
</style><g class="ulnmmdpxh"><path class="vspug48qm"/><path class="hkugkfbiy"/></g>`,
		"fallback": "uix-sharp:holiday-calendar-star",
	});
}

export default Component;
