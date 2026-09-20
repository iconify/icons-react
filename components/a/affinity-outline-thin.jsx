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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju0sk_7wf {
  d: path("M2 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}

.ziznm1ama {
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="ju0sk_7wf"/><path class="ziznm1ama"/><path class="mxzk029nb"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:affinity-outline-thin",
	});
}

export default Component;
