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
		"content": `<style>.pky2--ehk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5L11 7.25l4.25-4.5m-11.5 7.5h16.5v11H3.75zM8 13h8");
}
</style><path class="pky2--ehk"/>`,
		"fallback": "iconoven:ballot-box-sharp",
	});
}

export default Component;
