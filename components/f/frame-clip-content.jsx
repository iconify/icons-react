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
		"content": `<style>.cx9tvzb3z {
  d: path("M9.55 9.55a7 7 0 0 1 4.34-2.023m3.568.629a7 7 0 0 1 3.386 3.386m.629 3.568a7 7 0 0 1-2.023 4.34");
}

.mijt3ob_z {
  d: path("M2.5 2.5h12v12h-12Zm12 19a7 7 0 0 1-7-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mijt3ob_z"/><path class="cx9tvzb3z"/></g>`,
		"fallback": "uix-sharp:frame-clip-content",
	});
}

export default Component;
