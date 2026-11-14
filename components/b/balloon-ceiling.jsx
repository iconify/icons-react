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
		"content": `<style>.cxegibcyi {
  d: path("M5.5 9c-1 3 1 6 0 9M12 9c-1 4 1 8 0 12m6.5-12c-1 2.5 1 5 0 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybais_b4e {
  d: path("M2.5 3h19M3.25 6a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0Zm6.5 0a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0Zm6.5 0a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ybais_b4e"/><path class="cxegibcyi"/></g>`,
		"fallback": "uix-sharp:balloon-ceiling",
	});
}

export default Component;
