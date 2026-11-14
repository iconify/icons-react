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
		"content": `<style>.aq2y4ynms {
  d: path("M6.5 11.5h3v8h-3Zm4.25 8v-11l1.5-2.5l1.5 2.5v11ZM15 9.5h2.5v10H15Z");
}

.l9f-x9b6f {
  d: path("M4 3h16v16.5H4ZM2.5 19.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l9f-x9b6f"/><path class="aq2y4ynms"/></g>`,
		"fallback": "uix-sharp:city-view",
	});
}

export default Component;
