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
		"content": `<style>.aloqlz5sh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.75H15.5v5.5H2.75z");
}

.fl0ti4b_o {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 18.5h.01m3.74 0h.01m3.49 0h.01");
}

.i3r6w6bxz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15.75v-10h6v5H15v5Zm0 0h11.5m-9.5-6.5h1.5m8 4h3m0-2.5h3v10.5h-4l1.25-2.5V16c0-2-.25-3.5-.25-5.25Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="aloqlz5sh"/><path class="fl0ti4b_o"/><path class="i3r6w6bxz"/></g>`,
		"fallback": "iconoven:bulldozer-sharp",
	});
}

export default Component;
