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
		"content": `<style>.i2lq90buj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c3 2 4.5 4.5 4.5 7c0 2-1 3.5-2.5 4h-4c-1.5-.5-2.5-2-2.5-4c0-2.5 1.5-5 4.5-7Zm-2 11L8.5 19m5.5-4.5l1.5 4.5m-10 0h13v2.5h-13Zm9.25-12.75l-3.5 3.5");
}
</style><path class="i2lq90buj"/>`,
		"fallback": "uix-sharp:chess-bishop",
	});
}

export default Component;
