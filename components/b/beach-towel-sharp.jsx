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
		"content": `<style>.pkfaybc1g {
  d: path("M8.5 11.5h12.75l-.7 1.32l-2.85 5.36l-.7 1.32H2.75l.7-1.32l2.85-5.36l.7-1.32zm3.25 0l-4.25 8m9-8l-4.25 8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycdjlfbmq {
  cx: 6.5px;
  cy: 5.75px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="ycdjlfbmq"/><path class="pkfaybc1g"/></g>`,
		"fallback": "iconoven:beach-towel-sharp",
	});
}

export default Component;
