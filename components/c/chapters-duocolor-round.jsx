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

.oafl0mb7h {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm0 14h3m4 0h4m4 0h3");
}

.v_5dunf6c {
  stroke-opacity: 0.4;
  d: path("M10 10V6l6 4l-6 4z");
}
</style><g class="nrj6p8qat"><path class="v_5dunf6c"/><path class="oafl0mb7h"/></g>`,
		"fallback": "coolicons:chapters-duocolor-round",
	});
}

export default Component;
