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
		"content": `<style>.bnjnom5xi {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.sa3_rpb2p {
  d: path("M5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Zm13 9a6.5 6.5 0 0 0-13 0a6.5 6.5 0 0 0 13 0Z");
}

.y08yp_b2t {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y08yp_b2t"><path class="sa3_rpb2p"/><path class="bnjnom5xi"/></g>`,
		"fallback": "uix-sharp:element-astatine",
	});
}

export default Component;
