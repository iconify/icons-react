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
		"content": `<style>.f4dchtb7j {
  d: path("M2.5 21.5c2.5-1.5 5-3.5 7-6c1.5-2 2.75-4 3.5-6");
}

.gtfzmdbgv {
  fill: currentColor;
  d: path("M12.25 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.gx7co8bcg {
  d: path("M13.75 16.75s-7-4.25-7-8.75c0-2 1.5-3.75 3.75-3.75c1.25 0 2.5.75 3.25 2c.75-1.25 2-2 3.25-2c2.25 0 3.75 1.75 3.75 3.75c0 4.5-7 8.75-7 8.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gx7co8bcg"/><path class="f4dchtb7j"/><path class="gtfzmdbgv"/></g>`,
		"fallback": "uix-sharp:heart-cath",
	});
}

export default Component;
