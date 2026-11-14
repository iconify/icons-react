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
		"content": `<style>.j6_xetb6q {
  d: path("M8 9h8v3.5H8Zm0 7h4m-9.5-1.75h19");
}

.o4v_zdbcb {
  d: path("M5 2.5h14v19H5ZM8 6h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4v_zdbcb"/><path class="j6_xetb6q"/></g>`,
		"fallback": "uix-sharp:deposit-slip-scan",
	});
}

export default Component;
