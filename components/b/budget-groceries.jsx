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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.rvuswijho {
  d: path("M11.223 18.5H5L2.5 9h19l-.891 3.385M4.5 9V7a2.75 2.75 0 0 1 2.75-2.75h1.5A2.75 2.75 0 0 1 11.5 7v2m2.75 0c0-5.5 5.5-5.5 5.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze82kx64m {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="rvuswijho"/><path class="ze82kx64m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:budget-groceries",
	});
}

export default Component;
