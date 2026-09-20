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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju0sk_7wf {
  d: path("M2 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.voy7tslmx {
  d: path("M10.5 8v8");
}

.ziznm1ama {
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="ju0sk_7wf"/><path class="ziznm1ama"/><path class="voy7tslmx"/><path class="ao39mzg8u"/></g>`,
		"fallback": "iconmind:anti-affinity-outline-thin",
	});
}

export default Component;
