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
		"content": `<style>.qi4blha8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6zA1.75 1.75 0 0 1 9 7.75v8.5A1.75 1.75 0 0 1 7.25 18a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 7.25 6M2.5 9h3m-3 3h3m-3 3h3M9 9h2c4 0 5-4.5 10-4.5M9 12h12M9 15h2c4 0 5 4.5 10 4.5");
}
</style><path class="qi4blha8e"/>`,
		"fallback": "uix:fiber-bundle",
	});
}

export default Component;
