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
		"content": `<style>.ekia9spqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 16.5v-14l6.5 11H12m-9 3h18m-17.5 0V18A2.25 2.25 0 0 0 8 18v-1.5m8 0V18a2.25 2.25 0 0 0 4.5 0v-1.5");
}
</style><path class="ekia9spqw"/>`,
		"fallback": "uix-sharp:catamaran-sail",
	});
}

export default Component;
