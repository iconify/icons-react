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
		"content": `<style>.ches287iv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3v4l5 5l-5 5v4M17 3v4l-5 5l5 5v4M5 3h14M5 21h14");
}

.ft5dv1b6b {
  fill: none;
}

.gjd8qbs8h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 2a1 1 0 0 1 1 1v4c0 .265-.105.52-.293.707L13.414 12l4.293 4.293A1 1 0 0 1 18 17v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4c0-.265.105-.52.293-.707L10.586 12L6.293 7.707A1 1 0 0 1 6 7V3a1 1 0 0 1 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="gjd8qbs8h"/><path class="ches287iv"/></g>`,
		"fallback": "coolicons:hourglass-duotone-sharp",
	});
}

export default Component;
