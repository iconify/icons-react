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
		"content": `<style>.ltjoooqsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.072 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.718 0 1.407.064 2.057.186M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm13.25 7.5a3.75 3.75 0 1 0 1.5 5.25a3.75 3.75 0 0 1-1.5-5.25Z");
}
</style><path class="ltjoooqsy"/>`,
		"fallback": "uix-sharp:avatar-away",
	});
}

export default Component;
