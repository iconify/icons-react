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
		"content": `<style>.hpve99q8p {
  d: path("M12 6c-2-1.75-7.5-1.5-7.5 4c0 4 3 6.5 5 6.5c1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c2 0 5-2.5 5-6.5c0-5.5-5.5-5.75-7.5-4Zm0 10v5.5");
}

.qj1lnacwz {
  d: path("M7.75 10.5a4 4 0 0 1 2-3M12 6c0-1.5 1-3 2.75-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpve99q8p"/><path class="qj1lnacwz"/></g>`,
		"fallback": "uix-sharp:candy-apple",
	});
}

export default Component;
