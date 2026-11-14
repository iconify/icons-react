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
		"content": `<style>.njxz2cbbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5v-18M12 16c-3 1-8-.5-8.5-4.5c4-.5 7.5 1 8.5 4.5Zm0 0c3 1 8-.5 8.5-4.5c-4-.5-7.5 1-8.5 4.5Zm0-7.5c-2 .5-5.5-.5-6-4c3-.5 5.5 1 6 4Zm0 0c2 .5 5.5-.5 6-4c-3-.5-5.5 1-6 4Z");
}
</style><path class="njxz2cbbs"/>`,
		"fallback": "uix-sharp:basil-plant",
	});
}

export default Component;
