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
		"content": `<style>.b-5izzb1h {
  d: path("M4.75 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.75 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.75 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.dgvfjop8a {
  d: path("M2.5 5h19v14h-19Zm0 4h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dgvfjop8a"/><path class="b-5izzb1h"/></g>`,
		"fallback": "uix-sharp:cinema-loyalty-card",
	});
}

export default Component;
