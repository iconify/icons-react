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
		"content": `<style>.bt07gvbzc {
  d: path("M12 12c-1.5 0-2.25-1-2.25-2.25c0-1.5 1.25-2.25 1.5-3.75c.75.75 1 1.5 1 2.25c.5-.5.75-1 1-1.5c.75.75 1 2 1 3C14.25 11 13.5 12 12 12Z");
}

.uk14yjhev {
  d: path("M6 21.5V4a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 4v17.5m-15.5 0h19m-6-8h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uk14yjhev"/><path class="bt07gvbzc"/></g>`,
		"fallback": "uix-sharp:boiler-room",
	});
}

export default Component;
