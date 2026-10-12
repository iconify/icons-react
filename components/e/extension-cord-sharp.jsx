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
		"content": `<style>.c0ld3hb7i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 7.25h.01m2.49 0h.01");
}

.nrcl2ob7x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13.25h6v3.5a3 3 0 0 1-6 0Zm1.75-3.5v3.5M8 9.75v3.5");
}

.t182wfb5i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 19.75v1.5h11v-10.5m-3.5-7h7v7h-7z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nrcl2ob7x"/><path class="t182wfb5i"/><path class="c0ld3hb7i"/></g>`,
		"fallback": "iconoven:extension-cord-sharp",
	});
}

export default Component;
