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
		"content": `<style>.cq8jo2bli {
  d: path("M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M4 8l2.5-4h11L20 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wadq_6blm {
  d: path("M9 12h6v3.5H9Z");
}
</style><g class="ulnmmdpxh"><path class="cq8jo2bli"/><path class="wadq_6blm"/></g>`,
		"fallback": "uix-sharp:file-box-labelled",
	});
}

export default Component;
