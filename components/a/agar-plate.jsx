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
		"content": `<style>.hbuvhnbrh {
  d: path("M2.5 9.5a9.5 5.5 0 1 0 19 0a9.5 5.5 0 1 0-19 0Z");
}

.hlqdb717d {
  d: path("M5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5-2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.j6xzs2bsb {
  d: path("M2.5 9.5v4a9.5 5.5 0 0 0 19 0v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hbuvhnbrh"/><path class="j6xzs2bsb"/><path class="hlqdb717d"/></g>`,
		"fallback": "uix-sharp:agar-plate",
	});
}

export default Component;
