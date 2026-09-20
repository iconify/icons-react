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
		"content": `<style>.bo88vlbuz {
  d: path("M16 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rmcfrrb-t {
  d: path("M6 3v12c0 3 2 4 5 4h6");
}
</style><g class="nrj6p8qat"><path class="rmcfrrb-t"/><path class="bo88vlbuz"/></g>`,
		"fallback": "iconmind:hockey-outline-regular",
	});
}

export default Component;
