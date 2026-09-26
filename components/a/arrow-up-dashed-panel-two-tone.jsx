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
		"content": `<style>.cdi5gyd-n {
  stroke-opacity: 0.4;
  d: path("M10.5 21H13.5M3 13.5V10.5M7 3H6C4.34315 3 3 4.34315 3 6M3 18C3 19.6569 4.34315 21 6 21M21 17V18C21 19.6569 19.6569 21 18 21");
}

.iggkh_bss {
  d: path("M15.5 3.99999V14M10 8.99999L15.1314 3.40209C15.3296 3.18589 15.6704 3.18589 15.8686 3.40209L21 8.99999");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cdi5gyd-n"/><path class="iggkh_bss"/></g>`,
		"fallback": "keyline-icons:arrow-up-dashed-panel-two-tone",
	});
}

export default Component;
