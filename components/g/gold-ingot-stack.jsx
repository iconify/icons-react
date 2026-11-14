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
		"content": `<style>.cqmhog1ox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h8l-1.25-5h-5.5Zm11 0h8l-1.25-5h-5.5Zm-6-5h9l-1.25-5h-6.5Z");
}
</style><path class="cqmhog1ox"/>`,
		"fallback": "uix-sharp:gold-ingot-stack",
	});
}

export default Component;
