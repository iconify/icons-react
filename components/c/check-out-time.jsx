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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ow-wshb7b {
  d: path("M7 21v-3.5a2 2 0 0 1 4 0V21M7 7.5h7m.75 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_e5j3b0h {
  d: path("M12.7 21H3V3h15v8.9");
}
</style><g class="ulnmmdpxh"><path class="z_e5j3b0h"/><path class="ow-wshb7b"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:check-out-time",
	});
}

export default Component;
