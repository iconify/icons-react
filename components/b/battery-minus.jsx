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
		"content": `<style>.ba1kmbbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 20.8v.7h-12v-17h12v10.7m-8-10.7v-2h4v2M15 18h6");
}
</style><path class="ba1kmbbtl"/>`,
		"fallback": "uix-sharp:battery-minus",
	});
}

export default Component;
