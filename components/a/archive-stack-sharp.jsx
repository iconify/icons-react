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
		"content": `<style>.i_w_-ybye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v5H2.75zm1.5 5h15.5v11.5H4.25v-2.5Zm5.75 4h4");
}
</style><path class="i_w_-ybye"/>`,
		"fallback": "iconoven:archive-stack-sharp",
	});
}

export default Component;
