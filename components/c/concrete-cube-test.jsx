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
		"content": `<style>.fdan5fv6d {
  d: path("M3 4h18M3 20h18M12 4l6.75 4v8L12 20l-6.75-4V8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtmibdvzj {
  d: path("M5.25 8L12 12l6.75-4M12 12v8");
}
</style><g class="ulnmmdpxh"><path class="fdan5fv6d"/><path class="vtmibdvzj"/></g>`,
		"fallback": "uix-sharp:concrete-cube-test",
	});
}

export default Component;
