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
		"content": `<style>.om_avib3w {
  d: path("M9 5.5h6v4H9ZM9 21l3-5.5l3 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf9tidbco {
  d: path("M3 2.5h18v10H3Zm4 10L9 21h6l2-8.5");
}
</style><g class="ulnmmdpxh"><path class="zf9tidbco"/><path class="om_avib3w"/></g>`,
		"fallback": "uix-sharp:basketball-backboard",
	});
}

export default Component;
