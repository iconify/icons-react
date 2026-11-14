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
		"content": `<style>.qsesjmblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17M12 3.5v17M3.5 12h17M7.75 7.75h.01m8.49 0h.01m-8.51 8.5h.01");
}
</style><path class="qsesjmblk"/>`,
		"fallback": "uix-sharp:impact-effort",
	});
}

export default Component;
