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
		"content": `<style>.f3cdo99uq {
  d: path("M9 6h5.5l4.5 4.5V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z");
}

.qjswwebqn {
  d: path("M14.5 6v3a1.5 1.5 0 0 0 1.5 1.5h3M4.5 17V5a2 2 0 0 1 2-2H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f3cdo99uq"/><path class="qjswwebqn"/></g>`,
		"fallback": "uix-sharp:file-copy",
	});
}

export default Component;
