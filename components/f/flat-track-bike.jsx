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
		"content": `<style>.ft82cli5t {
  d: path("M2.5 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.o783q5dsu {
  d: path("M4 10h4.5l2-2H16l-3 5H9.5L6 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzpcx1iac {
  d: path("M13.5 5.5h2l2.5 11");
}
</style><g class="ulnmmdpxh"><path class="ft82cli5t"/><path class="o783q5dsu"/><path class="wzpcx1iac"/></g>`,
		"fallback": "uix-sharp:flat-track-bike",
	});
}

export default Component;
