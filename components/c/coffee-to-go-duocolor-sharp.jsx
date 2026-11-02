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
		"content": `<style>.i4ipbtb6x {
  stroke-opacity: 0.4;
  d: path("M7 12h10M7 16h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u700swbcp {
  d: path("m6 5l1-2h10l2 4H5zm0 2l1 12c.1 1.2.8 2 2 2h6c1.2 0 1.9-.8 2-2l1-12");
}
</style><g class="nrj6p8qat"><path class="i4ipbtb6x"/><path class="u700swbcp"/></g>`,
		"fallback": "coolicons:coffee-to-go-duocolor-sharp",
	});
}

export default Component;
