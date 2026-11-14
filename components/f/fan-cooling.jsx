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
		"content": `<style>.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.dtxdwabaj {
  d: path("M12 10c0-3 2-4.5 4.5-4.5M13.75 13c2.5 1.5 3 4 1.75 6.25M10.25 13c-2.5 1.5-5 .5-6-1.75");
}

.saz4y0b1r {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="saz4y0b1r"/><path class="atv66_b1j"/><path class="dtxdwabaj"/></g>`,
		"fallback": "uix-sharp:fan-cooling",
	});
}

export default Component;
