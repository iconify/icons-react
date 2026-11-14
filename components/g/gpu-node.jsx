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
		"content": `<style>.j_6cnd1gh {
  d: path("M9.5 9.5h5v5h-5Z");
}

.lou9xibvu {
  d: path("M6 6h12v12H6Zm3.5-3.5V6m5-3.5V6m-5 12v3.5m5-3.5v3.5m-12-12H6m-3.5 5H6m12-5h3.5m-3.5 5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lou9xibvu"/><path class="j_6cnd1gh"/></g>`,
		"fallback": "uix-sharp:gpu-node",
	});
}

export default Component;
