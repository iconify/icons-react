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
		"content": `<style>.vd899nt6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10v11.5M12 10c3-1.5 3-6.5 0-7.5c-3 1-3 6 0 7.5Zm0 0c-2-2.5-6-2.5-8 .5c2 2.5 6 2 8-.5Zm0 0c2-2.5 6-2.5 8 .5c-2 2.5-6 2-8-.5Zm0 7.5C10.5 15 7 15 5.5 17c1.5 2.5 5 2.5 6.5.5Zm0 0c1.5-2.5 5-2.5 6.5-.5c-1.5 2.5-5 2.5-6.5.5Z");
}
</style><path class="vd899nt6f"/>`,
		"fallback": "uix-sharp:alfalfa",
	});
}

export default Component;
