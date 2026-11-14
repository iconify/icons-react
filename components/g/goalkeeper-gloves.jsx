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
		"content": `<style>.jty--sb1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 21.5v-16a2.75 2.75 0 0 0-5.5 0v4c-2.5 0-2.75 4 0 5.75v6.25Zm3 0v-16a2.75 2.75 0 0 1 5.5 0v4c2.5 0 2.75 4 0 5.75v6.25ZM5 17.75h5.5m3 0H19");
}
</style><path class="jty--sb1c"/>`,
		"fallback": "uix-sharp:goalkeeper-gloves",
	});
}

export default Component;
