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
		"content": `<style>.dnz72yc2k {
  d: path("M12 9.5h9.5m-8.5 0l1 11h5.5l1-11m-5.25-2.75h3M2.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.q4ris7c2o {
  d: path("M4.5 7v7.5a4 4 0 0 0 4 4H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dnz72yc2k"/><path class="q4ris7c2o"/></g>`,
		"fallback": "uix-sharp:bin-collection-route",
	});
}

export default Component;
