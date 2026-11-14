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
		"content": `<style>.ctf1-bc0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19M6.75 21L12 2.5L17.25 21m-8-8.75h5.5M12 2.5V21");
}
</style><path class="ctf1-bc0q"/>`,
		"fallback": "uix-sharp:core-drill-rig",
	});
}

export default Component;
