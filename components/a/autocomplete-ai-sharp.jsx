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
		"content": `<style>.poh5-x5nf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10h18.5v9.5H2.75zM6 14.75h4m1.75-2.5v5m2.25-2.5h1m1.75 0h1m1-12l.27 1.98L21 5l-1.98.27l-.27 1.98l-.27-1.98L16.5 5l1.98-.27z");
}
</style><path class="poh5-x5nf"/>`,
		"fallback": "iconoven:autocomplete-ai-sharp",
	});
}

export default Component;
