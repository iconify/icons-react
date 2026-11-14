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
		"content": `<style>.t-5vvdb6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12M6 21h12M9 7.5h6v9H9ZM12 3v4.5m0 9V21");
}
</style><path class="t-5vvdb6m"/>`,
		"fallback": "uix-sharp:constraint-top-bottom",
	});
}

export default Component;
