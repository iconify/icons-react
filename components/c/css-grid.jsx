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
		"content": `<style>.o203fszhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v8h-8Zm11 0h8v8h-8Zm-11 11h8v8h-8Zm13.5 0h-.25a1.25 1.25 0 0 0-1.25 1.25v1.5a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1 1.25 1.25v1.5a1.25 1.25 0 0 0 1.25 1.25H16m3-8h.25a1.25 1.25 0 0 1 1.25 1.25v1.5a1.25 1.25 0 0 0 1.25 1.25a1.25 1.25 0 0 0-1.25 1.25v1.5a1.25 1.25 0 0 1-1.25 1.25H19");
}
</style><path class="o203fszhj"/>`,
		"fallback": "uix-sharp:css-grid",
	});
}

export default Component;
