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
		"content": `<style>.bli7l-qys {
  stroke-opacity: 0.4;
  d: path("M4 10c6-3 10 3 16 0M9 4v10m6-9v10");
}

.kpj7-0bup {
  d: path("M4 15c6-3 10 3 16 0V4C14 7 10 1 4 4Zm0 0v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bli7l-qys"/><path class="kpj7-0bup"/></g>`,
		"fallback": "coolicons:flag-checkered-duocolor-sharp",
	});
}

export default Component;
