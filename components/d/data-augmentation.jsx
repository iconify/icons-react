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
		"content": `<style>.kxw59qbgq {
  d: path("M5.5 18.5L8.75 15l3.5 3.5M5.5 7H16a2 2 0 0 1 2 2v9.5");
}

.mpmc0j4to {
  d: path("m10 2.5l11.5 1.75l-.5 8.25");
}

.rfoud3bna {
  d: path("M2.5 10h12.75v11.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rfoud3bna"/><path class="kxw59qbgq"/><path class="mpmc0j4to"/></g>`,
		"fallback": "uix-sharp:data-augmentation",
	});
}

export default Component;
