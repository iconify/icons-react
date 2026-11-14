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
		"content": `<style>.hcvg5ccjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.425 3.575l-6.011 6.011m-.464 8.316L11 19.485L2.515 11l7.071-4.243l5.657 5.657l-.72 1.2M6.05 8.879l5.162 5.162M17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="hcvg5ccjs"/>`,
		"fallback": "uix-sharp:housekeeping-supervisor",
	});
}

export default Component;
