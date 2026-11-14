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
		"content": `<style>.apr_wd27w {
  d: path("M12.7 20.5H3.5V5h17v6.9M8 3v4m8-4v4M3.5 10h17m-5 11.5v-7");
}

.lfpehachd {
  d: path("M15.5 14.75H21l-1.5 2l1.5 2h-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="apr_wd27w"/><path class="lfpehachd"/></g>`,
		"fallback": "uix-sharp:fiscal-year-start",
	});
}

export default Component;
