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
		"content": `<style>.keaugib7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10.5h11V21h-11Zm3.5 0V8h4v2.5M12 8V4.5h4M9.5 15.75h5");
}
</style><path class="keaugib7m"/>`,
		"fallback": "uix-sharp:cosmetic-pump",
	});
}

export default Component;
