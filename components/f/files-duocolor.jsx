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
		"content": `<style>.fa5hwzbvo {
  d: path("M8 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8M8 6l5 5M8 6v4a1 1 0 0 0 1 1h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xz0j-oida {
  stroke-opacity: 0.4;
  d: path("M11 3h5m0 0l5 5m-5-5v4a1 1 0 0 0 1 1h4m0 0v8a2 2 0 0 1-2 2h-2");
}
</style><g class="nrj6p8qat"><path class="xz0j-oida"/><path class="fa5hwzbvo"/></g>`,
		"fallback": "coolicons:files-duocolor",
	});
}

export default Component;
