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
		"content": `<style>.k8159ibts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.308 6.761l5.343 9.864a2.625 2.625 0 0 1-2.308 3.875H6.657a2.625 2.625 0 0 1-2.308-3.875l5.343-9.864a2.625 2.625 0 0 1 4.616 0M12 11.75v6m2.598-4.5l-5.196 3m5.196 0l-5.196-3");
}
</style><path class="k8159ibts"/>`,
		"fallback": "uix:ice-risk-sign",
	});
}

export default Component;
