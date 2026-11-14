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
		"content": `<style>.dubgu6h2f {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 10h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbzl-n3-e {
  d: path("M13.5 10.5c.75-1 2.25-1 3 0m-8 4c1 1.5 2.1 2.25 3.5 2.25s2.5-.75 3.5-2.25");
}
</style><g class="ulnmmdpxh"><path class="dubgu6h2f"/><path class="wbzl-n3-e"/></g>`,
		"fallback": "uix-sharp:emoji-wink",
	});
}

export default Component;
