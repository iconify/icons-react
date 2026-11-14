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
		"content": `<style>.ut32w-rkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10v4m4-8v12m4-15v18m4-14v6m4-3.5v3m-1 3q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z");
}
</style><path class="ut32w-rkw"/>`,
		"fallback": "uix-sharp:ai-audio",
	});
}

export default Component;
