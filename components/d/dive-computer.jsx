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
		"content": `<style>.rxuyrcbli {
  d: path("M9.5 12.5L12 15l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xndzlxb_w {
  d: path("M6.5 6h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm2 0V2.5h7V6m-7 12v3.5h7V18M12 8.75V15");
}
</style><g class="ulnmmdpxh"><path class="xndzlxb_w"/><path class="rxuyrcbli"/></g>`,
		"fallback": "uix-sharp:dive-computer",
	});
}

export default Component;
