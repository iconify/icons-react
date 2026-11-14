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
		"content": `<style>.bppnlvb5e {
  d: path("M6.5 3.5h11v17h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpq2f7q_n {
  d: path("M14 3.5a2 2 0 0 1-4 0M2.5 8h4m-4 4h4m-4 4h4m11-8h4m-4 4h4m-4 4h4M12 9.75v5.5M9.25 12.5h5.5");
}
</style><g class="ulnmmdpxh"><path class="bppnlvb5e"/><path class="wpq2f7q_n"/></g>`,
		"fallback": "uix-sharp:chip-plus",
	});
}

export default Component;
