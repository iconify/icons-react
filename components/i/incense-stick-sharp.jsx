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
		"content": `<style>.k6uyx2mqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.5 8.25l2.45-.817L16.5 5.5l-1.4-1.867l2.65-.883m1 7.75l1.842-.368L21 8.5M7.5 18.25L14.75 9m-12 9.25h18.5v3H2.75z");
}
</style><path class="k6uyx2mqh"/>`,
		"fallback": "iconoven:incense-stick-sharp",
	});
}

export default Component;
