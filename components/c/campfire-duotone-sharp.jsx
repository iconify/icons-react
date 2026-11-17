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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.m6efbybdf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 17l16 4M4 21l16-4M12 3c.313 1.563 1.25 2.813 2.5 3.75c.938.938 1.25 2.188 1.25 3.75a3.75 3.75 0 1 1-7.5 0c0-.937.313-1.562.625-1.875m0 0a1.25 1.25 0 1 0 2.5 0c0-.937-.312-1.25-.625-1.875C10.125 5.5 10.438 4.25 12 3");
}

.swrbk22xv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3c.311 1.55 1.252 2.813 2.5 3.75c1.008 1.009 1.25 2.376 1.25 3.75a3.75 3.75 0 0 1-7.5 0c0-.639.156-1.405.625-1.875a1.25 1.25 0 0 0 2.5 0c0-.937-.312-1.25-.625-1.875C9.985 5.217 10.785 3.973 12 3");
}
</style><g class="ft5dv1b6b"><path class="swrbk22xv"/><path class="m6efbybdf"/></g>`,
		"fallback": "coolicons:campfire-duotone-sharp",
	});
}

export default Component;
