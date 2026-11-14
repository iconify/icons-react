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
		"content": `<style>.t1wo07wem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V21H3Zm0 5h18m-13-7V6m8-3.5V6M8 18v-2m4 2v-3.5m4 3.5v-5.5");
}
</style><path class="t1wo07wem"/>`,
		"fallback": "uix-sharp:capacity-plan",
	});
}

export default Component;
