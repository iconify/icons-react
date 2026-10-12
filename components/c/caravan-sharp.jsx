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
		"content": `<style>.hzma9bb3u {
  cx: 8px;
  cy: 18.25px;
  r: 2.5px;
}

.sc_fbccnn {
  d: path("M2.75 5.75h15v12.5h-15z");
}

.u83ecs0hu {
  d: path("M5.75 8.75h4.5v3.5h-4.5Zm7 9.5V10H15v8.25m2.75-2h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sc_fbccnn"/><path class="u83ecs0hu"/><circle class="hzma9bb3u"/></g>`,
		"fallback": "iconoven:caravan-sharp",
	});
}

export default Component;
