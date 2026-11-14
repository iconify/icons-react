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
		"content": `<style>.abg-r8b_z {
  fill: currentColor;
  d: path("M3.25 10h4v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1ZM10 14h4v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm6.75-6.5h4V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_vez68_f {
  d: path("M5 3h.5a1.75 1.75 0 0 1 1.75 1.75v14.5A1.75 1.75 0 0 1 5.5 21H5a1.75 1.75 0 0 1-1.75-1.75V4.75A1.75 1.75 0 0 1 5 3m6.75 0h.5A1.75 1.75 0 0 1 14 4.75v14.5A1.75 1.75 0 0 1 12.25 21h-.5A1.75 1.75 0 0 1 10 19.25V4.75A1.75 1.75 0 0 1 11.75 3m6.75 0h.5a1.75 1.75 0 0 1 1.75 1.75v14.5A1.75 1.75 0 0 1 19 21h-.5a1.75 1.75 0 0 1-1.75-1.75V4.75A1.75 1.75 0 0 1 18.5 3");
}
</style><g class="hntgybcog"><path class="j_vez68_f"/><path class="abg-r8b_z"/></g>`,
		"fallback": "uix:chart-bar-percent",
	});
}

export default Component;
