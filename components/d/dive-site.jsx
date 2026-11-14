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
		"content": `<style>.bzzx5hq_k {
  d: path("M12 19c-3.5-4-6.5-7-6.5-10a6.5 6.5 0 0 1 13 0c0 3-3 6-6.5 10Z");
}

.irzukcl2o {
  d: path("M9.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-7 10q1.5-2 3 0t3 0m7 0q1.5-2 3 0t3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bzzx5hq_k"/><path class="irzukcl2o"/></g>`,
		"fallback": "uix-sharp:dive-site",
	});
}

export default Component;
