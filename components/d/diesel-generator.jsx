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
		"content": `<style>.j78rs4buh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 19.5H2.5V9h16v2.5M6.5 9V3H10M6 13h5m-5 3h3m10.25-1.25L16 18.25h4l-3.25 3.5");
}
</style><path class="j78rs4buh"/>`,
		"fallback": "uix-sharp:diesel-generator",
	});
}

export default Component;
