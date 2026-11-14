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
		"content": `<style>.g93vh7bpf {
  fill: currentColor;
  d: path("M15.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.lr7iyrhdr {
  d: path("M12.8 19.5H2.5v-16h16v9.2");
}

.pdxvj-a5p {
  d: path("m2.5 16.5l5-5l5 5m-.75-8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lr7iyrhdr"/><path class="pdxvj-a5p"/><path class="g93vh7bpf"/></g>`,
		"fallback": "uix-sharp:colour-label",
	});
}

export default Component;
