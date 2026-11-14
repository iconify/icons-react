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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zp5uwxegi {
  d: path("m12 5l9 4.5l-9 4.5l-9-4.5Z");
}

.zuo752-mb {
  d: path("M7 12v4.5c1.5 1.25 3.25 1.75 5 1.75s3.5-.5 5-1.75V12m3-2v5");
}
</style><g class="ulnmmdpxh"><path class="zp5uwxegi"/><path class="zuo752-mb"/></g>`,
		"fallback": "uix-sharp:graduate-program",
	});
}

export default Component;
