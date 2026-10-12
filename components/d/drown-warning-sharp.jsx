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
		"content": `<style>.gmstibmbn {
  cx: 12px;
  cy: 13.5px;
  r: 2.25px;
}

.kwf_qlb9f {
  d: path("m4.5 6.25l2.87 9.5l-.78-.5h-.76c-1.54 0-1.54 1-3.08 1m16.75-10l-2.87 9.5l.78-.5h.76c1.54 0 1.54 1 3.08 1m-18.5 4c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="gmstibmbn"/><path class="kwf_qlb9f"/></g>`,
		"fallback": "iconoven:drown-warning-sharp",
	});
}

export default Component;
