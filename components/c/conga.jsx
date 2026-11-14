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
		"content": `<style>.h7vcilrjq {
  d: path("M6.5 5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}

.jdqs-2bfp {
  d: path("M5.75 9q6.25 2.5 12.5 0");
}

.ocr8deb-g {
  d: path("M6.5 5C5 10 5.5 16 8 21.5h8C18.5 16 19 10 17.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h7vcilrjq"/><path class="ocr8deb-g"/><path class="jdqs-2bfp"/></g>`,
		"fallback": "uix-sharp:conga",
	});
}

export default Component;
