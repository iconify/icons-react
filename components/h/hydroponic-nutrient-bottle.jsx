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
		"content": `<style>.jqfofd8sj {
  d: path("M9.5 2.5h5V6L18 9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3.5-3Zm0 3.5h5");
}

.qp-kflbje {
  d: path("M12 10.5c2.5 3 3 4 3 5a3 3 0 0 1-6 0c0-1 .5-2 3-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jqfofd8sj"/><path class="qp-kflbje"/></g>`,
		"fallback": "uix-sharp:hydroponic-nutrient-bottle",
	});
}

export default Component;
