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
		"content": `<style>.il-rnqb5b {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Z");
}

.ite58wb9m {
  d: path("M9.606 18.578a7 7 0 0 1 0-13.156m4.788 0a7 7 0 0 1 0 13.156");
}

.nvebvjbad {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="il-rnqb5b"/><path class="nvebvjbad"/><path class="ite58wb9m"/></g>`,
		"fallback": "uix-sharp:blood-vessel-section",
	});
}

export default Component;
