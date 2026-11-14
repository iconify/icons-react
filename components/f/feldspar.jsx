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
		"content": `<style>.tuos68buu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 7l3-4h5l3 4v8L12 21l-5.5-6Zm0 0h11M12 7v14");
}
</style><path class="tuos68buu"/>`,
		"fallback": "uix-sharp:feldspar",
	});
}

export default Component;
