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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-xvz9boc {
  d: path("M12 8s-3.5 4-3.5 6.5a3.5 3.5 0 0 0 7 0C15.5 12 12 8 12 8Z");
}

.zei_yp44v {
  d: path("M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm4.5 0V3h5v2");
}
</style><g class="ulnmmdpxh"><path class="zei_yp44v"/><path class="w-xvz9boc"/></g>`,
		"fallback": "uix-sharp:hydrogen-fuel-cell",
	});
}

export default Component;
