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
		"content": `<style>.f2_tlp3ab {
  d: path("M11.75 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.qz5c_ssew {
  d: path("M2.5 6h19v13h-19Zm0 5l5-5m-5 9l9-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qz5c_ssew"/><path class="f2_tlp3ab"/></g>`,
		"fallback": "uix-sharp:camera-disposable",
	});
}

export default Component;
