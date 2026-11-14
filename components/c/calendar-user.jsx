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
		"content": `<style>.iuxdx2vhv {
  d: path("M16.25 15.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM15 21c0-1.75 1.25-2.5 3-2.5s3 .75 3 2.5Z");
}

.jvhzyj__t {
  d: path("M12.2 20.5H3.5V5h17v6.7M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jvhzyj__t"/><path class="iuxdx2vhv"/></g>`,
		"fallback": "uix-sharp:calendar-user",
	});
}

export default Component;
