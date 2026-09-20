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
		"content": `<style>.ao39mzg8u {
  d: path("M13.5 8v8");
}

.ju0sk_7wf {
  d: path("M2 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.voy7tslmx {
  d: path("M10.5 8v8");
}

.ziznm1ama {
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="nrj6p8qat"><path class="ju0sk_7wf"/><path class="ziznm1ama"/><path class="voy7tslmx"/><path class="ao39mzg8u"/></g>`,
		"fallback": "iconmind:anti-affinity-outline-regular",
	});
}

export default Component;
