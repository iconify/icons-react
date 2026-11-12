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
		"content": `<style>.gv5gocbpa {
  d: path("M19.5 12L9.5 12C7.83333 12 4.5 11 4.5 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb1xpachw {
  stroke-linejoin: round;
  d: path("M14.5 17L19.5 12L14.5 7");
}
</style><g class="ipq1z-bjh"><path class="xb1xpachw"/><path class="gv5gocbpa"/></g>`,
		"fallback": "solar:forward-2-line-duotone",
	});
}

export default Component;
