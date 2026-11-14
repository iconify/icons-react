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
		"content": `<style>.qf_mh08ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5h16V16h-3.5v3.5h-9V16H4ZM8 8v2m2.75-2v2m2.5-2v2M16 8v2");
}
</style><path class="qf_mh08ai"/>`,
		"fallback": "uix-sharp:ethernet",
	});
}

export default Component;
