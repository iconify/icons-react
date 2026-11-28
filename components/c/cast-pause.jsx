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
		"content": `<style>.dno4_nblm {
  fill: currentColor;
  d: path("M3 20C3 20.5523 2.5523 21 2 21C1.4477 21 1 20.5523 1 20C1 19.4477 1.4477 19 2 19C2.5523 19 3 19.4477 3 20Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ppl1aib0j {
  d: path("M2 8L2 7C2 5.3431 3.3432 4 5 4L12 4M22 14L22 17C22 18.6569 20.6569 20 19 20L14 20M2 16C4.20914 16 6 17.79086 6 20M2 12C6.41828 12 10 15.58172 10 20M17 4L17 10M21 4L21 10");
}
</style><g class="nrj6p8qat"><path class="ppl1aib0j"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:cast-pause",
	});
}

export default Component;
