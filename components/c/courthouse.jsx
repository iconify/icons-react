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
		"content": `<style>.i_kzlh7gc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5L12 3l9.5 5.5Zm3.5 0v9m4-9v9m4-9v9m4-9v9m-14.5 0h17m-18 3h19");
}
</style><path class="i_kzlh7gc"/>`,
		"fallback": "uix-sharp:courthouse",
	});
}

export default Component;
