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
		"content": `<style>.si6ry8nmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.83 5.193l4.67-1.078a1.5 1.5 0 0 1 .966.1l4.881 2.253a1.5 1.5 0 0 1 .819 1.757l-.771 2.828a1.5 1.5 0 0 1-1.842 1.052l-3.568-.973a1.5 1.5 0 0 0-.952.055l-2.744 1.097a1.5 1.5 0 0 1-2.044-1.194L5.68 6.853a1.5 1.5 0 0 1 1.15-1.66M3 19h18M3 16v3m18-3v3m-9-2.5V19");
}
</style><path class="si6ry8nmy"/>`,
		"fallback": "uix:artefact-measure",
	});
}

export default Component;
