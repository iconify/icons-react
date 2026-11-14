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
		"content": `<style>.c_5tqqnoz {
  d: path("M5.5 17H8l3-9h2");
}

.d9_yerbmd {
  d: path("m11 8l3 9h2M15 6h2.5l1 11");
}

.dyjdpzbjq {
  d: path("M3 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dyjdpzbjq"/><path class="c_5tqqnoz"/><path class="d9_yerbmd"/></g>`,
		"fallback": "uix-sharp:delivery-scooter",
	});
}

export default Component;
