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
		"content": `<style>.rc48xumtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.75h18v8.5H3ZM7 10a5 5 0 0 1 10 0M5.5 10h13M12 3v2");
}
</style><path class="rc48xumtr"/>`,
		"fallback": "uix-sharp:dental-reception",
	});
}

export default Component;
