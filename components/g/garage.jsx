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
		"content": `<style>.b6raz_3dy {
  d: path("M7 12.5h10v8H7Zm0 3h10M7 18h10");
}

.nffs6d9du {
  d: path("m3 11l9-7l9 7v9.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nffs6d9du"/><path class="b6raz_3dy"/></g>`,
		"fallback": "uix-sharp:garage",
	});
}

export default Component;
