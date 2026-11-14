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
		"content": `<style>.ljfwj2g3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 20.2v.8h-9V10.5h9v6.1M6 10.5v-5a2 2 0 0 1 2-2h6.5V6h-4v4.5M12.25 6l1.25 2.5m4.5 5c2.5 2 3.5 3.5 3.5 5a3.25 2.75 0 0 1-6.5 0c0-1.25.75-2.25 1.5-2.75c.25 1 .75 1.5 1.25 1.5c0-1.5-.25-2.75.25-3.75Z");
}
</style><path class="ljfwj2g3k"/>`,
		"fallback": "uix-sharp:heat-protectant",
	});
}

export default Component;
