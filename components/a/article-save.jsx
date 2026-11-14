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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzy_j-bom {
  d: path("M13 2.5V11l2.5-2l2.5 2V2.5m-10 12h8M8 18h5");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="vzy_j-bom"/></g>`,
		"fallback": "uix-sharp:article-save",
	});
}

export default Component;
