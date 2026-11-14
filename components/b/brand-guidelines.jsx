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
		"content": `<style>.e_krceh5v {
  d: path("M12 5.5Q9 3.25 3 4v14.5q6-.75 9 1.5Zm0 0q3-2.25 9-1.5v14.5q-6-.75-9 1.5");
}

.n3uv-tb6u {
  d: path("M6 8h3v3H6Zm9 1h3m-3 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_krceh5v"/><path class="n3uv-tb6u"/></g>`,
		"fallback": "uix-sharp:brand-guidelines",
	});
}

export default Component;
