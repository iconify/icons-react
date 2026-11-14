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
		"content": `<style>.r4zu_6b1f {
  d: path("M10 7.5L11.5 9L14 6.5m4 9.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y06uiebsu {
  d: path("M2.5 12h19v7.5h-19Zm5 0V4A1.5 1.5 0 0 1 9 2.5h6A1.5 1.5 0 0 1 16.5 4v8");
}
</style><g class="ulnmmdpxh"><path class="y06uiebsu"/><path class="r4zu_6b1f"/></g>`,
		"fallback": "uix-sharp:ballot-scanner",
	});
}

export default Component;
