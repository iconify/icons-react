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
		"content": `<style>.f6qfcr9-a {
  d: path("M6.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM13 9.5h4.5M13 13h4.5m-12 3c0-1.5 1.5-2 3-2s3 .5 3 2");
}

.splv_iblx {
  d: path("M3 5.5h18v13H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="splv_iblx"/><path class="f6qfcr9-a"/></g>`,
		"fallback": "uix-sharp:driving-licence",
	});
}

export default Component;
