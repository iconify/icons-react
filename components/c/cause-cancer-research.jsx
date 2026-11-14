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
		"content": `<style>.in7ad74oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.665 21H3.5l6-12.5v-6h5v6l.606 1.262M14.75 21.75l4.75-5.5a2.5 2.5 0 1 0-3 0l4.75 5.5");
}
</style><path class="in7ad74oz"/>`,
		"fallback": "uix-sharp:cause-cancer-research",
	});
}

export default Component;
