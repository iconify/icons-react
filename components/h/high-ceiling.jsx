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
		"content": `<style>.dywmofmwe {
  d: path("M8.75 14.5a3.25 3.25 0 0 1 6.5 0ZM12 16.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm3cirb_x {
  d: path("M2.5 21.5V10L12 2.5l9.5 7.5v11.5M12 2.5v8.75");
}
</style><g class="ulnmmdpxh"><path class="wm3cirb_x"/><path class="dywmofmwe"/></g>`,
		"fallback": "uix-sharp:high-ceiling",
	});
}

export default Component;
