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
		"content": `<style>.gigw0jtjs {
  d: path("M2.5 2.5H20v4H2.5Zm2 4v4m13.5-4v4m-6 9H2.5v-9H20v.7m-5.5 10.05c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5c0 .25-.25.5-.5.5h-6c-.25 0-.5-.25-.5-.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfac8bbng {
  d: path("M16.25 15.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="gigw0jtjs"/><path class="wfac8bbng"/></g>`,
		"fallback": "uix-sharp:exhibitor",
	});
}

export default Component;
