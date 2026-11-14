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
		"content": `<style>.do2621b_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h4V7h-.75L5 20L3.75 7H3ZM10 3h4v2.5h-.75L12 18.5l-1.25-13H10Zm7 1.5h4V7h-.75L19 20L17.75 7H17ZM2.5 15h19");
}
</style><path class="do2621b_j"/>`,
		"fallback": "uix-sharp:fertiliser-spikes",
	});
}

export default Component;
