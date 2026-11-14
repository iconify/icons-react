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
		"content": `<style>.jiy4mehfh {
  d: path("M8 9.5v4a4 4 0 0 0 8 0v-4");
}

.trxeadcsa {
  d: path("M4.5 21V10a7.5 7.5 0 0 1 15 0v11M4.5 9.5h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="trxeadcsa"/><path class="jiy4mehfh"/></g>`,
		"fallback": "uix-sharp:hair-bangs",
	});
}

export default Component;
