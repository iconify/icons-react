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
		"content": `<style>.b58fv5b8p {
  d: path("M9.75 12.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 18.5C8.5 17 10 16 12 16s3.5 1 3.5 2.5");
}

.tgitqibxl {
  d: path("M5 4.5h14v17H5Zm5 3h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tgitqibxl"/><path class="b58fv5b8p"/></g>`,
		"fallback": "uix-sharp:id-badge",
	});
}

export default Component;
