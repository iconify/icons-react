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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzguutbop {
  d: path("M12.307 20.5H4.5c-1.1 0-2-.9-2-2v-13c0-1.1.9-2 2-2H9l2 2h8.5c1.1 0 2 .9 2 2v3.852M2.5 8.75h19");
}

.vteej966r {
  d: path("M5 13.5h2.5L9 11l2 5.5l1.5-3h1m1 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5-2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-2.25-3.5l2.5-1.5m-2.5 3l2.5 1.5");
}
</style><g class="ulnmmdpxh"><path class="uzguutbop"/><path class="vteej966r"/></g>`,
		"fallback": "uix-sharp:health-data-share",
	});
}

export default Component;
