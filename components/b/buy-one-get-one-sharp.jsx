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
		"content": `<style>.mo0m8hb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11h7v10.25h-7zm2 0V8.25h3V11m6.5 0h7v10.25h-7zm2 0V8.25h3V11M12 3.25v3.5M10.25 5h3.5");
}
</style><path class="mo0m8hb3s"/>`,
		"fallback": "iconoven:buy-one-get-one-sharp",
	});
}

export default Component;
