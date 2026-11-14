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
		"content": `<style>.liin3l5wr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3.5 21.5V20c0-3.25 3-5.5 7.5-5.5c.637 0 1.208.039 1.748.123M15.5 17h6m-6 3.5h6");
}
</style><path class="liin3l5wr"/>`,
		"fallback": "uix-sharp:civil-rights",
	});
}

export default Component;
