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
		"content": `<style>.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzx5qsbdk {
  d: path("M10.5 11.5H10a2 2 0 0 0 0 4h.5m3-4h.5a2 2 0 0 1 0 4h-.5m-3-2h3");
}
</style><g class="ulnmmdpxh"><path class="q3wixnhae"/><path class="vzx5qsbdk"/></g>`,
		"fallback": "uix-sharp:folder-link",
	});
}

export default Component;
