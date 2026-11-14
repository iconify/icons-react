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
		"content": `<style>.sa4mhvb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.99 14.828l8.838-8.838a2.25 2.25 0 0 1 3.182 0a2.25 2.25 0 0 1 0 3.182L9.172 18.01a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182m6.894-6.894l3.182 3.182m-8.132 1.768l3.182 3.182M9.348 11.47l3.182 3.182m-7.866 3.27za.875.875 0 0 1 1.237 0l.177.177a.875.875 0 0 1 0 1.237a.875.875 0 0 1-1.237 0l-.177-.177a.875.875 0 0 1 0-1.237");
}
</style><path class="sa4mhvb-a"/>`,
		"fallback": "uix:epinephrine-injector",
	});
}

export default Component;
