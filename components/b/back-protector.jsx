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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nkf6mlbye {
  d: path("M7 2.5h10c2 0 3.5 1.5 3.5 3.5v3.5c0 2-2.5 3.5-3.5 5.5v4.5c0 1.25-1 2-2.25 2h-5.5C8 21.5 7 20.75 7 19.5V15c-1-2-3.5-3.5-3.5-5.5V6C3.5 4 5 2.5 7 2.5");
}

.pps2w3b7l {
  d: path("M12 2.5za1.75 1.75 0 0 1 1.75 1.75v15.5A1.75 1.75 0 0 1 12 21.5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 12 2.5m-1.75 6.25h3.5M10.25 15h3.5");
}
</style><g class="hntgybcog"><path class="nkf6mlbye"/><path class="pps2w3b7l"/></g>`,
		"fallback": "uix:back-protector",
	});
}

export default Component;
