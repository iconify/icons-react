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
		"content": `<style>.csx4t6b2j {
  d: path("M16 11.5q0 3.5-2.5 5.5m-.5 3h.01");
}

.gtdtfrzlu {
  d: path("M12 4.5h8v3a4 4 0 0 1-8 0ZM2.5 6H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gtdtfrzlu"/><path class="csx4t6b2j"/></g>`,
		"fallback": "uix-sharp:batik-tjanting",
	});
}

export default Component;
