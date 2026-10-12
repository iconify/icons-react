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
		"content": `<style>.i3309-b1r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c4 0 7 3 7 7c0 4.5-3.5 8-7 8s-7-3.5-7-8c0-4 3-7 7-7Z");
}

.jgyfg-bpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.75h.01");
}

.rhj7-w4rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.za19y0dix {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.5c-1 .75 1 1 0 1.75m-2.25-13a2.25 2.25 0 1 1 3.25 2l-1 .533V12");
}
</style><g class="ux2u0rbkq"><path class="i3309-b1r"/><path class="rhj7-w4rz"/><path class="za19y0dix"/><path class="jgyfg-bpu"/></g>`,
		"fallback": "iconoven:gender-reveal-sharp",
	});
}

export default Component;
