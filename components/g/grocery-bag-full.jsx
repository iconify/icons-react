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
		"content": `<style>.bsolnvcgy {
  d: path("m5.61 3.144l2.898-.777l1.941 7.245l-2.898.776ZM14 10c0-3 1.5-5.25 4.5-6c.5 3-1.25 5.25-4.5 6");
}

.f0ng-_-es {
  d: path("M5 10h14v11H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f0ng-_-es"/><path class="bsolnvcgy"/></g>`,
		"fallback": "uix-sharp:grocery-bag-full",
	});
}

export default Component;
