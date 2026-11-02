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

.opq2sobrt {
  stroke-opacity: 0.4;
  d: path("m10 9l-3 3l3 3m4-6l3 3l-3 3");
}

.zxk7_zbjo {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="nrj6p8qat"><path class="opq2sobrt"/><path class="zxk7_zbjo"/></g>`,
		"fallback": "coolicons:code-block-duocolor-round",
	});
}

export default Component;
