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
		"content": `<style>.u_be9ybtg {
  d: path("M15.5 6L18 8.5L14.5 15L9 9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz-nqqb-b {
  d: path("M16 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 17l3.5-3.5M7 21l3.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="u_be9ybtg"/><path class="zz-nqqb-b"/></g>`,
		"fallback": "uix-sharp:badminton-shuttle-flight",
	});
}

export default Component;
