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
		"content": `<style>.dauz4828i {
  d: path("m12.25 5.75l-2.75 4.5H13l-2.75 4.5");
}

.m6k8k4h8w {
  d: path("M15.75 21.25v-3H19v-4l1.5-.5l.865-.346l-.565-.754L19 10c-.25-4.25-3.25-7.25-7.5-7.25C7 2.75 3.75 6 3.75 10.5c0 2.6 1.1 4.5 3 6v4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m6k8k4h8w"/><path class="dauz4828i"/></g>`,
		"fallback": "iconoven:headache-sharp",
	});
}

export default Component;
