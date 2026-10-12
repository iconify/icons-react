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
		"content": `<style>.ko64z8bqh {
  d: path("M4.25 2.75h15.5v18.5H4.25zm3.25 0v18.5");
}

.lt_te9bsy {
  cx: 13.75px;
  cy: 12px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfto44_fd {
  d: path("M10 12h2.25m3 0h2.25m-3.75 1.5v2.25m0-3.75h.01");
}
</style><g class="x2cwu0gfd"><path class="ko64z8bqh"/><circle class="lt_te9bsy"/><path class="yfto44_fd"/></g>`,
		"fallback": "iconoven:driver-log-sharp",
	});
}

export default Component;
