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
		"content": `<style>.inj75_bjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H4.5v-19h15v9.7m-11-9.7v19m3-14.5h4m2.5 8v6m-3-3h6");
}
</style><path class="inj75_bjm"/>`,
		"fallback": "uix-sharp:account-open",
	});
}

export default Component;
