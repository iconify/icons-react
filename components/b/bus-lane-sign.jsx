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
		"content": `<style>.aytbzxbuj {
  d: path("M7.5 13V7A1.5 1.5 0 0 1 9 5.5h6A1.5 1.5 0 0 1 16.5 7v6Zm0-3.5h9m-7 3.5v1.75m5-1.75v1.75");
}

.tfodaoboa {
  d: path("M3.5 2.5h17v15h-17Zm8.5 15v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tfodaoboa"/><path class="aytbzxbuj"/></g>`,
		"fallback": "uix-sharp:bus-lane-sign",
	});
}

export default Component;
