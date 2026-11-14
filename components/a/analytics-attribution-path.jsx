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
		"content": `<style>.atoq0ibfs {
  d: path("M14 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.t551x-b_v {
  d: path("M3.5 19.5L8 13l4 4l4-7.25M3.5 19.5h.01M8 13h.01M12 17h.01m5.74-10.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="atoq0ibfs"/><path class="t551x-b_v"/></g>`,
		"fallback": "uix-sharp:analytics-attribution-path",
	});
}

export default Component;
