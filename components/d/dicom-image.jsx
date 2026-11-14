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
		"content": `<style>.e10w-ub7g {
  d: path("M8.5 6V5c0-1.1.9-2 2-2H19c1.1 0 2 .9 2 2v8.5c0 1.1-.9 2-2 2h-1m-12.25-.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ftxufjbcj {
  d: path("M2.5 9H15v12.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xr0mygkzk {
  d: path("M5.5 9V8c0-1.1.9-2 2-2H16c1.1 0 2 .9 2 2v8.5c0 1.1-.9 2-2 2h-1");
}
</style><g class="ulnmmdpxh"><path class="ftxufjbcj"/><path class="xr0mygkzk"/><path class="e10w-ub7g"/></g>`,
		"fallback": "uix-sharp:dicom-image",
	});
}

export default Component;
