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
		"content": `<style>.fzc9g03zk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm0 4.5h12.5M3 12h12.5M3 16.5h12.5M18.25 3v11.5");
}
</style><path class="fzc9g03zk"/>`,
		"fallback": "uix-sharp:blinds-closed",
	});
}

export default Component;
