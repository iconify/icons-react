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
		"content": `<style>.kiex9hzma {
  d: path("M2.5 18h19m-18 0L5 12.5L8.5 10l3-4L16 7l2.5 4l2 2l.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xds56mb7v {
  d: path("m8.5 10l2.5 3.5l-.5 4.5m.5-4.5l3.5-1l4-1.5m-4 1.5L15 18");
}
</style><g class="ulnmmdpxh"><path class="kiex9hzma"/><path class="xds56mb7v"/></g>`,
		"fallback": "uix-sharp:coke-fuel",
	});
}

export default Component;
