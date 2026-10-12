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
		"content": `<style>.k-d9n02xw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 8.73a3 3 0 1 1 2.5 0v1.52H20v3h-4.75l1.35 5.85l.288 1.471l-2.92.68l-.288-1.471L12 16l-1.68 3.78l-.391 1.447l-2.92-.68L7.4 19.1l1.35-5.85H4v-3h6.75Z");
}
</style><path class="k-d9n02xw"/>`,
		"fallback": "iconoven:cookie-cutter-sharp",
	});
}

export default Component;
