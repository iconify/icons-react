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
		"content": `<style>.t5wpwqpqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h13v9h-13Zm-2 9h17v9h-17ZM10 7.5h4m-4 9h4");
}
</style><path class="t5wpwqpqx"/>`,
		"fallback": "uix-sharp:archive-boxes",
	});
}

export default Component;
