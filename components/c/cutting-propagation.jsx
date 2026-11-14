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
		"content": `<style>.q40u_qb4d {
  d: path("m10 18.5l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu9shvz5y {
  d: path("m6 6l1.5 15.5h9L18 6M6.5 10h11M12 2.5v14");
}
</style><g class="ulnmmdpxh"><path class="vu9shvz5y"/><path class="q40u_qb4d"/></g>`,
		"fallback": "uix-sharp:cutting-propagation",
	});
}

export default Component;
