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
		"content": `<style>.dy07ddn-l {
  d: path("M14.25 18.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 2.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-2.75-3l3-1.75m-2.75 2.75l2.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrobo1bvg {
  d: path("M12.7 21.5H4.5v-19h15v8.8M8 7.5h8m-8 4h5m6.25 3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="wrobo1bvg"/><path class="dy07ddn-l"/></g>`,
		"fallback": "uix-sharp:call-sheet-share",
	});
}

export default Component;
