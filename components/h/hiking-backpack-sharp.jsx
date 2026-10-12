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
		"content": `<style>.mx2abp67g {
  d: path("M12.25 8.75L10.5 14l2.75 3l-.5 4.25M10.5 14l-2 3.5L7 21.25m5.25-11.5l2.25 2.5L17 12m.75-2.25v11.5m-13-13h3.5v5.5h-3.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xa-sitzqx {
  cx: 13.25px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="xa-sitzqx"/><path class="mx2abp67g"/></g>`,
		"fallback": "iconoven:hiking-backpack-sharp",
	});
}

export default Component;
