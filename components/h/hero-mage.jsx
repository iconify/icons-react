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
		"content": `<style>.mb42mob8y {
  d: path("M2.5 18a9.5 2.75 0 1 0 19 0a9.5 2.75 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq-g13gbe {
  d: path("m7.5 15.5l5-8.5l4 8.5m-4-13q.5 1.75 2.25 2.25Q13 5.25 12.5 7q-.5-1.75-2.25-2.25Q12 4.25 12.5 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="mb42mob8y"/><path class="vq-g13gbe"/></g>`,
		"fallback": "uix-sharp:hero-mage",
	});
}

export default Component;
