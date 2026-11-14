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
		"content": `<style>.erlecubjt {
  d: path("M13 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.fi-x7fb9s {
  d: path("M14 17.25v4L16 20l2 1.25v-4");
}

.tw6vs5-jp {
  d: path("M10.3 16.5H2.5v-13h19v10.2M6 7.5h12m-12 4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tw6vs5-jp"/><path class="erlecubjt"/><path class="fi-x7fb9s"/></g>`,
		"fallback": "uix-sharp:award-certificate-seal",
	});
}

export default Component;
