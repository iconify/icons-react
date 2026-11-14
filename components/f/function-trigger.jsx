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
		"content": `<style>.ihi3rsyzu {
  d: path("M9 6.5A5 5 0 0 0 9 14m4-7.5a5 5 0 0 1 0 7.5m6 0l-3.25 3.75h3.5L16 21.5");
}

.l94irr1ot {
  d: path("M12.3 17.5H2.5V3h17v7.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l94irr1ot"/><path class="ihi3rsyzu"/></g>`,
		"fallback": "uix-sharp:function-trigger",
	});
}

export default Component;
