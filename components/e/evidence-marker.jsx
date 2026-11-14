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
		"content": `<style>.ehgmcug7p {
  d: path("m10.75 10l1.75-1.5v8");
}

.ro45npbam {
  d: path("M4.5 20.5L8.5 4h7l4 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ro45npbam"/><path class="ehgmcug7p"/></g>`,
		"fallback": "uix-sharp:evidence-marker",
	});
}

export default Component;
