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
		"content": `<style>.f5yulux_f {
  d: path("M4.5 2.5v19M4.5 4H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4.5");
}

.s8nb6fbws {
  d: path("M9 7h6.5v5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5yulux_f"/><path class="s8nb6fbws"/></g>`,
		"fallback": "uix-sharp:flag-penalty-number",
	});
}

export default Component;
