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
		"content": `<style>.b4dg80uba {
  d: path("M4.5 10h15v11.5h-15Zm3 0V7a4.5 4.5 0 0 1 9 0v3");
}

.pz25z89sv {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 16v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b4dg80uba"/><path class="pz25z89sv"/></g>`,
		"fallback": "uix-sharp:encryption-lock",
	});
}

export default Component;
