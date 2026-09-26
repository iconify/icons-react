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
		"content": `<style>.bqod4ub1y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.31707 10.1904C7.94409 9.01818 9.06221 7.93216 10.2184 8.31736L21.9762 12.2334C23.2896 12.6714 23.3568 14.5046 22.0768 15.0361L17.2321 17.0459L14.8454 22.1386C14.2677 23.3711 12.4749 23.257 12.0612 21.958L8.31707 10.1904Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qtuy6acvb {
  d: path("M12.1748 5.7626L13.9549 3.9872M7.8824 4.6963L6.9812 2M4.704 7.8671L2 6.9681M5.7726 12.148L3.9925 13.9234");
}
</style><g class="nrj6p8qat"><path class="bqod4ub1y"/><path class="qtuy6acvb"/></g>`,
		"fallback": "keyline-icons:cursor-click-duotone",
	});
}

export default Component;
