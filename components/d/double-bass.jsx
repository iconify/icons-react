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
		"content": `<style>.rea88pbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10c-3.5 0-4 1.5-3.25 3.5c.5 1.5-2.75 2-2.75 5c0 2.25 2.5 3 6 3s6-.75 6-3c0-3-3.25-3.5-2.75-5C16 11.5 15.5 10 12 10Zm0-5v11.5M12 5a1.5 1.5 0 1 1 1.5-1.5");
}
</style><path class="rea88pbfe"/>`,
		"fallback": "uix-sharp:double-bass",
	});
}

export default Component;
