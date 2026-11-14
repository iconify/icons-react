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
		"content": `<style>.bv2mq5fcc {
  d: path("M4.5 10v5.5h15V10M12 15.5v6m-6 0l6-3l6 3");
}

.r49rsac3q {
  d: path("M8.5 2.5h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r49rsac3q"/><path class="bv2mq5fcc"/></g>`,
		"fallback": "uix-sharp:executive-chair",
	});
}

export default Component;
