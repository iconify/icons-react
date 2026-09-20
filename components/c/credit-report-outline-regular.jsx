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
		"content": `<style>.e5k2eotmk {
  d: path("M9 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ei5j_bckv {
  d: path("M11.5 11.5 15 15");
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ky4omnbla"/><path class="e5k2eotmk"/><path class="ei5j_bckv"/></g>`,
		"fallback": "iconmind:credit-report-outline-regular",
	});
}

export default Component;
