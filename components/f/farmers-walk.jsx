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
		"content": `<style>.i1z5d1rmo {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM5 14l3.5-4.25h7L19 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x81z0cbln {
  d: path("M12 9.75V15l-2 6.5m2-6.5l2 6.5M3.5 16.25V14h3v2.25a2.75 2.75 0 1 1-3 0Zm14 0V14h3v2.25a2.75 2.75 0 1 1-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="i1z5d1rmo"/><path class="x81z0cbln"/></g>`,
		"fallback": "uix-sharp:farmers-walk",
	});
}

export default Component;
