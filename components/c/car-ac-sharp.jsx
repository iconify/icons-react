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
		"content": `<style>.nigjbrb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.75v9.5M7.89 6.13l8.22 4.75m-8.22 0l8.22-4.75M2.75 15.5h18.5v5.75H2.75zm4.75 2v1.75M12 17.5v1.75m4.5-1.75v1.75");
}
</style><path class="nigjbrb7n"/>`,
		"fallback": "iconoven:car-ac-sharp",
	});
}

export default Component;
