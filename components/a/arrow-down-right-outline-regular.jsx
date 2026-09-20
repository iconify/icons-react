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
		"content": `<style>.cejwj-bns {
  d: path("M10 20h10V10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.po51cnplk {
  d: path("m4 4 16 16");
}
</style><g class="nrj6p8qat"><path class="po51cnplk"/><path class="cejwj-bns"/></g>`,
		"fallback": "iconmind:arrow-down-right-outline-regular",
	});
}

export default Component;
