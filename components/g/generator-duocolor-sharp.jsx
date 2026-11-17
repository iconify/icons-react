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

.ri9l16o0w {
  stroke-opacity: 0.4;
  d: path("M5 7V3h14v4M9 10l-3 3h4l-3 3");
}

.sj6tq8ckv {
  d: path("M3 7h18v12H3Zm3 12v2m12-2v2m-4-10h3m-3 4h3");
}
</style><g class="nrj6p8qat"><path class="ri9l16o0w"/><path class="sj6tq8ckv"/></g>`,
		"fallback": "coolicons:generator-duocolor-sharp",
	});
}

export default Component;
