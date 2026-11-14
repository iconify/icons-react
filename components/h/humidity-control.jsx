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
		"content": `<style>.ty34-1bpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5s-6.5 6.5-6.5 11a6.5 6.5 0 0 0 13 0c0-4.5-6.5-11-6.5-11ZM9.5 15h5");
}
</style><path class="ty34-1bpw"/>`,
		"fallback": "uix-sharp:humidity-control",
	});
}

export default Component;
