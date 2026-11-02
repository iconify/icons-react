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
		"content": `<style>.a7agso4ey {
  d: path("M7 9v7m4-10v3m4 0v3m4 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-x1nwbug {
  stroke-opacity: 0.4;
  d: path("M3 4v16h18");
}
</style><g class="nrj6p8qat"><path class="o-x1nwbug"/><path class="a7agso4ey"/></g>`,
		"fallback": "coolicons:chart-waterfall-duocolor-sharp",
	});
}

export default Component;
