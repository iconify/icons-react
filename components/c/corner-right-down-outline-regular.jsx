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
		"content": `<style>.c1nxh3m2e {
  d: path("m9 15 5 5 5 -5");
}

.g5tlcslpz {
  d: path("M4 4h10v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="g5tlcslpz"/><path class="c1nxh3m2e"/></g>`,
		"fallback": "iconmind:corner-right-down-outline-regular",
	});
}

export default Component;
