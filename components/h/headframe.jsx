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
		"content": `<style>.ool-pcbyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm1.25 2.75L5 21.5m9.75-11.75L19 21.5m-16 0h18M12 11v10.5M12 7h.01");
}
</style><path class="ool-pcbyr"/>`,
		"fallback": "uix-sharp:headframe",
	});
}

export default Component;
