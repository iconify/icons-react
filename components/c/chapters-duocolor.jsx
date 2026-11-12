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

.v_5dunf6c {
  stroke-opacity: 0.4;
  d: path("M10 10V6l6 4l-6 4z");
}

.xbo0zm77d {
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 16h3m4 0h4m4 0h3");
}
</style><g class="nrj6p8qat"><path class="v_5dunf6c"/><path class="xbo0zm77d"/></g>`,
		"fallback": "coolicons:chapters-duocolor",
	});
}

export default Component;
