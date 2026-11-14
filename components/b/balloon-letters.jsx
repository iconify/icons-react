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
		"content": `<style>.evgmc0bvt {
  d: path("M5 9.5a7 7.5 0 1 0 14 0a7 7.5 0 1 0-14 0Z");
}

.n2k9n8zij {
  d: path("M12 17q-1.25 2.25.5 4.5M9.75 13L12 6.5l2.25 6.5m-3.75-2.25h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="evgmc0bvt"/><path class="n2k9n8zij"/></g>`,
		"fallback": "uix-sharp:balloon-letters",
	});
}

export default Component;
