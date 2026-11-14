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
		"content": `<style>.miccz5bpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 19h-10V5h19v8.1m-19-3.6h19m-19 0h19M6 15h2.5m6.5 6.25l.25-2L19.5 15l1.75 1.75L17 21Z");
}
</style><path class="miccz5bpx"/>`,
		"fallback": "uix-sharp:card-edit",
	});
}

export default Component;
