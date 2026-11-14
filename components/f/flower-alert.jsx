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
		"content": `<style>.o0zp-kzxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25A2.5 2.5 0 1 1 13.25 10A2.5 2.5 0 1 1 10 12.5A2.5 2.5 0 1 1 6.75 10A2.5 2.5 0 1 1 8 6.25a2.5 2.5 0 1 1 4 0Zm-2 6.25v9M10 9h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="o0zp-kzxc"/>`,
		"fallback": "uix-sharp:flower-alert",
	});
}

export default Component;
