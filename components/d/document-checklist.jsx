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
		"content": `<style>.c-fiunb8n {
  d: path("M5 3.5h14v17H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utwoapf-j {
  d: path("m8.5 9l1.5 1.5l2.5-3m-4 7.5l1.5 1.5l2.5-3M14 9h2m-2 6h2");
}
</style><g class="ulnmmdpxh"><path class="c-fiunb8n"/><path class="utwoapf-j"/></g>`,
		"fallback": "uix-sharp:document-checklist",
	});
}

export default Component;
