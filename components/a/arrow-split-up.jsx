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
		"content": `<style>.a2psuhk-y {
  d: path("m4 7l3-3l3 3m4 0l3-3l3 3");
}

.tvql_fb0l {
  d: path("M12 20.5V15c0-3-5-3-5-6.5V4m5 11c0-3 5-3 5-6.5V4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tvql_fb0l"/><path class="a2psuhk-y"/></g>`,
		"fallback": "uix-sharp:arrow-split-up",
	});
}

export default Component;
