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
		"content": `<style>.h8y6kwivj {
  d: path("M18 11v1a3.5 3.5 0 0 1-3.5 3.5H6");
}

.tftnstbxs {
  d: path("M4 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 7.5v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tftnstbxs"/><path class="h8y6kwivj"/></g>`,
		"fallback": "uix-sharp:conversation-branch",
	});
}

export default Component;
