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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wd_3w8bqs {
  d: path("M9 14.5c-2.75-1.75-4-3-4-5a7 7 0 0 1 14 0c0 2-1.25 3.25-4 5Zm3 7c-2 0-2.5-2 0-4.25c2.5 2.25 2 4.25 0 4.25Z");
}

.wh0qtrbzv {
  d: path("M12 2.5c-2 3.5-2 8.5-1.25 12");
}
</style><g class="ulnmmdpxh"><path class="wd_3w8bqs"/><path class="wh0qtrbzv"/></g>`,
		"fallback": "uix-sharp:balloon-burner",
	});
}

export default Component;
