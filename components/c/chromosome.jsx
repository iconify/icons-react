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
		"content": `<style>.sh2e90bun {
  d: path("M16.5 3.5c-1.5 5.5-3 7-4.5 8.5s-3 3-4.5 8.5");
}

.ss_k9nbrc {
  d: path("M7.5 3.5c1.5 5.5 3 7 4.5 8.5s3 3 4.5 8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ss_k9nbrc"/><path class="sh2e90bun"/></g>`,
		"fallback": "uix-sharp:chromosome",
	});
}

export default Component;
