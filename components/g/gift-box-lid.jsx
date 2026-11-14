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
		"content": `<style>.yq4efvo8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5h16v10H4ZM2.34 6.176l18.712-3.299l.608 3.447L2.948 9.623ZM12 11.5v10m-.304-16.973l.608 3.446");
}
</style><path class="yq4efvo8f"/>`,
		"fallback": "uix-sharp:gift-box-lid",
	});
}

export default Component;
