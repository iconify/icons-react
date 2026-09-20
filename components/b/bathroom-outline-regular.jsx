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
		"content": `<style>.anqaqozxz {
  d: path("M15 4h6");
}

.d-a_pubdj {
  d: path("M18 4v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y_ufkmm9t {
  d: path("M3 12h18v4a4 4 0 0 1 -4 4H7a4 4 0 0 1 -4 -4Z");
}
</style><g class="nrj6p8qat"><path class="y_ufkmm9t"/><path class="d-a_pubdj"/><path class="anqaqozxz"/></g>`,
		"fallback": "iconmind:bathroom-outline-regular",
	});
}

export default Component;
