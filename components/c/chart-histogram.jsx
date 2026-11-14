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
		"content": `<style>.nrr44nb_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V13h4.25V8.5H12v-4h4.25V11h4.25v9.5ZM7.75 13v7.5M12 8.5v12m4.25-9.5v9.5");
}
</style><path class="nrr44nb_p"/>`,
		"fallback": "uix:chart-histogram",
	});
}

export default Component;
