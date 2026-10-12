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
		"content": `<style>.lxej1m1pi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.56 3.84l4.88 3.57Q9.25 8 9.25 9v6q0 1-.81 1.59l-4.88 3.57q-.81.59-.81-.41V4.25q0-1 .81-.41m17.69.41v15.5q0 1-.81.41l-4.88-3.57q-.81-.59-.81-1.59V9q0-1 .81-1.59l4.88-3.57q.81-.59.81.41M12 10v4");
}
</style><path class="lxej1m1pi"/>`,
		"fallback": "iconoven:autoencoder",
	});
}

export default Component;
