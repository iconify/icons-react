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
		"content": `<style>.ju31zcb1h {
  d: path("m13 7l-4.5 6H12l-1 4.5l4.5-6H12Z");
}

.pl2itdlzc {
  d: path("M4 20C3 11 8 3.5 20 3.5C20.5 15 14 21 4 20Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pl2itdlzc"/><path class="ju31zcb1h"/></g>`,
		"fallback": "uix-sharp:eco-leaf-bolt",
	});
}

export default Component;
