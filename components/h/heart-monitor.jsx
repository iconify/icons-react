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
		"content": `<style>.h15aecboo {
  fill: currentColor;
  d: path("M14 9.5s-2.25-1.5-2.25-3c0-.75.6-1.25 1.25-1.25c.4 0 .75.25 1 .5c.25-.25.6-.5 1-.5c.65 0 1.25.5 1.25 1.25c0 1.5-2.25 3-2.25 3Z");
}

.hqxeayb5a {
  d: path("M8.5 12.25H11l1-1.5l1.5 2.75l1-1.25h5M9.5 15L5 19.5m-2.5-2H5v4H2.5Z");
}

.u86kimuyo {
  d: path("M6.5 2.5h15V15h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u86kimuyo"/><path class="h15aecboo"/><path class="hqxeayb5a"/></g>`,
		"fallback": "uix-sharp:heart-monitor",
	});
}

export default Component;
