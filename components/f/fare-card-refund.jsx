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
		"content": `<style>.bi9htujil {
  d: path("M6.5 8.5h11v7h-11Zm0 2.5h11");
}

.hn8y3497e {
  d: path("m3.5 3.75l.25 3.5L7 5.75");
}

.nwjh2jbvu {
  d: path("M7.25 20.25a9.5 9.5 0 1 0-3.5-13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bi9htujil"/><path class="nwjh2jbvu"/><path class="hn8y3497e"/></g>`,
		"fallback": "uix-sharp:fare-card-refund",
	});
}

export default Component;
