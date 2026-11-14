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
		"content": `<style>.elrn8_h6c {
  d: path("m2.5 5l2 14.5q3.49 1.074 6.981.995m7.127-9.029L19.5 5M17 17h4.75v4.75H17Z");
}

.ml6m0obaj {
  d: path("M14.25 19.75v-4.5a1 1 0 0 1 1-1h4.5");
}

.q4yctbgpi {
  d: path("M2.5 5a8.5 2 0 1 0 17 0a8.5 2 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q4yctbgpi"/><path class="elrn8_h6c"/><path class="ml6m0obaj"/></g>`,
		"fallback": "uix-sharp:bucket-replication",
	});
}

export default Component;
