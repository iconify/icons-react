import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.hxaxgfb8f {
  stroke: var(--svg-color--f4f0e8, #f4f0e8);
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-75px, 1.75px);
  d: path("M8.344 18.406h15.312m-12.14 0a4.484 4.484 0 0 1 8.968 0");
}

.tdc424qok {
  fill: var(--svg-color--0d0a09, #0d0a09);
  d: path("M23.875 2H8.125A6.125 6.125 0 0 0 2 8.125v15.75A6.125 6.125 0 0 0 8.125 30h15.75A6.125 6.125 0 0 0 30 23.875V8.125A6.125 6.125 0 0 0 23.875 2");
}
</style><g class="ft5dv1b6b"><path class="tdc424qok"/><path class="hxaxgfb8f"/></g>`,
		"fallback": "vscode-icons:file-type-aube",
	});
}

export default Component;
