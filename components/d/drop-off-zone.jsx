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
		"content": `<style>.g6ytz715a {
  d: path("M4 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.picfep-5o {
  d: path("M2.5 17.5v-3l2.5-3h6l2.5 3h2.25v3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsx31p2rb {
  d: path("M2.5 21.5h16V18h3M9 2.5v6.25m-3-3l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="picfep-5o"/><path class="g6ytz715a"/><path class="xsx31p2rb"/></g>`,
		"fallback": "uix-sharp:drop-off-zone",
	});
}

export default Component;
