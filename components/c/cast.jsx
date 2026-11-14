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
		"content": `<style>.d-4hfbcxa {
  d: path("M3 12a7.5 7.5 0 0 1 7.5 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8nh0db5v {
  d: path("M3 8V6.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5M3 16a3.5 3.5 0 0 1 3.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="y8nh0db5v"/><path class="d-4hfbcxa"/></g>`,
		"fallback": "uix-sharp:cast",
	});
}

export default Component;
