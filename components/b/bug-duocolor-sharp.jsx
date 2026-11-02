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
		"content": `<style>.ageamsbzx {
  d: path("M17 13V7H7v6a5 5 0 0 0 10 0M9 7a3 3 0 0 1 6 0m-3 4v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ql3kx3b1a {
  stroke-opacity: 0.4;
  d: path("M7 11L4 8m3 5H3m5 3l-3 3m12-8l3-3m-3 5h4m-5 3l3 3");
}
</style><g class="nrj6p8qat"><path class="ql3kx3b1a"/><path class="ageamsbzx"/></g>`,
		"fallback": "coolicons:bug-duocolor-sharp",
	});
}

export default Component;
