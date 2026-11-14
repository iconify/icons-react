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
		"content": `<style>.g93vh7bpf {
  fill: currentColor;
  d: path("M15.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.mha0kebws {
  d: path("M13.908 15H5.5l-3-6h19l-1.878 3.757M6 9V5h7l2.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mha0kebws"/><path class="g93vh7bpf"/></g>`,
		"fallback": "uix-sharp:berth-occupied",
	});
}

export default Component;
