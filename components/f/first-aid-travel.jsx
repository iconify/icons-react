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
		"content": `<style>.lqbqbsbup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h16v13H4Zm5 0v-2h6v2M12 10v6m-3-3h6");
}
</style><path class="lqbqbsbup"/>`,
		"fallback": "uix-sharp:first-aid-travel",
	});
}

export default Component;
