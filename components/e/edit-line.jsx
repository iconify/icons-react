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
		"content": `<style>.tpgsmoh5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.536 2.222l2.828 2.828l-8.485 8.486l-3.536.707l.707-3.536ZM3.5 20.5h17");
}
</style><path class="tpgsmoh5z"/>`,
		"fallback": "uix-sharp:edit-line",
	});
}

export default Component;
