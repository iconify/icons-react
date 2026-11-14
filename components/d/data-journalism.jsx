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
		"content": `<style>.fhl-zn69h {
  d: path("M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z");
}

.tag_wjxfw {
  d: path("M14 2.5V8h5.5m-11 9.5v-4m3.5 4V9m3.5 8.5v-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhl-zn69h"/><path class="tag_wjxfw"/></g>`,
		"fallback": "uix-sharp:data-journalism",
	});
}

export default Component;
