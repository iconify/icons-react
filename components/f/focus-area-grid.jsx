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
		"content": `<style>.a77y5hm4t {
  d: path("M2.5 4.5h19v15h-19Zm4 3h.01m5.49 0h.01m5.49 0h.01M6.5 12h.01M12 12h.01m5.49 0h.01M6.5 16.5h.01m5.49 0h.01m5.49 0h.01");
}

.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a77y5hm4t"/><path class="atv66_b1j"/></g>`,
		"fallback": "uix-sharp:focus-area-grid",
	});
}

export default Component;
