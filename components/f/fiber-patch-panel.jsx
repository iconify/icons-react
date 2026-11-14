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
		"content": `<style>.ljm-k6uze {
  d: path("M2.5 3.5h19v10h-19Z");
}

.r62id932b {
  d: path("M5.5 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrz_fn3if {
  d: path("M13.5 10.5V15c0 4.5-4.5 6.25-9.5 4.25");
}
</style><g class="ulnmmdpxh"><path class="ljm-k6uze"/><path class="r62id932b"/><path class="wrz_fn3if"/></g>`,
		"fallback": "uix-sharp:fiber-patch-panel",
	});
}

export default Component;
