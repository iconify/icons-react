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
		"content": `<style>.c-m5iogoj {
  cx: 12px;
  cy: 15.5px;
  r: 1.75px;
}

.gc_xfhkcy {
  d: path("M6.25 15.5h4m3.5 0h4M12 17.25v4M8.5 6.75c-.75-.75.75-1.25 0-2s.75-1.25 0-2m3.5 4c-.75-.75.75-1.25 0-2s.75-1.25 0-2m3.5 4c-.75-.75.75-1.25 0-2s.75-1.25 0-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydy0opbpr {
  cx: 12px;
  cy: 15.5px;
  r: 5.75px;
}
</style><g class="x2cwu0gfd"><circle class="ydy0opbpr"/><circle class="c-m5iogoj"/><path class="gc_xfhkcy"/></g>`,
		"fallback": "iconoven:heated-steering-wheel-sharp",
	});
}

export default Component;
