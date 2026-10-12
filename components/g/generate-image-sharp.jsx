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
		"content": `<style>.kuv660lpz {
  d: path("m5.75 18.25l3.25-4l2.5 2.5l1.5-1.5l2.25 3m3.25-15.5l.33 2.42l2.42.33l-2.42.33l-.33 2.42l-.33-2.42l-2.42-.33l2.42-.33z");
}

.wkst_kb5t {
  d: path("M2.75 7.75h14v13.5h-14z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wkst_kb5t"/><path class="kuv660lpz"/></g>`,
		"fallback": "iconoven:generate-image-sharp",
	});
}

export default Component;
