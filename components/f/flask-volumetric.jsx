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
		"content": `<style>.utylqnbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5v8.25a5.5 5.5 0 1 0 3 0V2.5M9 6.5h6");
}
</style><path class="utylqnbzg"/>`,
		"fallback": "uix-sharp:flask-volumetric",
	});
}

export default Component;
