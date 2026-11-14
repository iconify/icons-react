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
		"content": `<style>.l192d4bii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11.5V20m0-8.5L5.5 5m6.5 6.5L18.5 5m-15 2l4 4m13-4l-4 4");
}
</style><path class="l192d4bii"/>`,
		"fallback": "uix-sharp:antibody-y",
	});
}

export default Component;
