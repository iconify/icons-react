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
		"content": `<style>.r3uzxjydl {
  d: path("M2.5 5h19v14h-19Zm3 4.5H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w910cbb-z {
  d: path("M13.75 7.75h5V11h-5ZM5.5 15.5h4m3 0h6.25");
}
</style><g class="ulnmmdpxh"><path class="r3uzxjydl"/><path class="w910cbb-z"/></g>`,
		"fallback": "uix-sharp:cheque",
	});
}

export default Component;
