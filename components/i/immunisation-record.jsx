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
		"content": `<style>.fp5lq51nk {
  d: path("m14.914 7.464l2.122 2.122l-4.95 4.95l-2.122-2.122Zm-3.889 6.011l-1.768 1.768m5.657-7.779l2.122 2.122");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyfridgii {
  d: path("M4 2.5h15.5v19H4Zm3.5 0v19");
}
</style><g class="ulnmmdpxh"><path class="zyfridgii"/><path class="fp5lq51nk"/></g>`,
		"fallback": "uix-sharp:immunisation-record",
	});
}

export default Component;
