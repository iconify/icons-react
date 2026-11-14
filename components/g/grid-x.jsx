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
		"content": `<style>.kn5eox6-r {
  d: path("M12.047 20.975L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.065");
}

.mj4c4493m {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v3.1m0 .8v4.2M9.25 3.5v17M3.5 9.25h17M14.75 3.5v5.75m-5.5 5.5h3m3.25.75l5 5m0-5l-5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kn5eox6-r"/><path class="mj4c4493m"/></g>`,
		"fallback": "uix-sharp:grid-x",
	});
}

export default Component;
