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
		"content": `<style>.j3v9rw7id {
  d: path("M13.7 19.5H2.5v-15h19V14m-19-6.5l9.216 5.821m3.382-1.777L21.5 7.5");
}

.rp2bwtyrz {
  d: path("m15 14.5l6 2.25L18.25 18L17 20.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j3v9rw7id"/><path class="rp2bwtyrz"/></g>`,
		"fallback": "uix-sharp:email-clicks-chart",
	});
}

export default Component;
