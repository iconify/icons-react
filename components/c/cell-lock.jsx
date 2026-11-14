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
		"content": `<style>.reihoibes {
  d: path("M11.7 21H3V3h18v9.8M9 3v18m6-18v9.8M3 9h18M3 15h8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfcg7bb6i {
  d: path("M14.5 17.5h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><g class="ulnmmdpxh"><path class="reihoibes"/><path class="wfcg7bb6i"/></g>`,
		"fallback": "uix-sharp:cell-lock",
	});
}

export default Component;
