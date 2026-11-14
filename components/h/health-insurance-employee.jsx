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
		"content": `<style>.hai3wsu8z {
  d: path("M3 2.5v7a9 7.5 0 0 0 18 0v-7");
}

.j125x-bxm {
  d: path("M12 17v.75a2 2 0 0 0 2 2h2.75m0 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.jxluu6iob {
  d: path("M6 3.75h12v8.5H6ZM9 8h.01M12 6.5h3m-3 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxluu6iob"/><path class="hai3wsu8z"/><path class="j125x-bxm"/></g>`,
		"fallback": "uix-sharp:health-insurance-employee",
	});
}

export default Component;
