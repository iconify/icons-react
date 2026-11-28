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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o77a-7b-i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 20C3 20.552 2.5523 21 2 21C1.4477 21 1 20.552 1 20C1 19.448 1.4477 19 2 19C2.5523 19 3 19.448 3 20Z");
  stroke: none;
}

.p0to38bnb {
  d: path("M2 8V7C2 5.343 3.3432 4 5 4H12M22 14V17C22 18.657 20.6569 20 19 20H14M2 16C4.2091 16 6 17.791 6 20M2 12C6.4183 12 10 15.582 10 20M16 4L22 10M22 4L16 10");
}
</style><g class="nrj6p8qat"><path class="p0to38bnb"/><path clip-rule="evenodd" class="o77a-7b-i"/></g>`,
		"fallback": "keyline-icons:cast-x-fill",
	});
}

export default Component;
