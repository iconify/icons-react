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
		"content": `<style>.hnqu4acwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h4m-2-2v4m13-2h4m-13-2q3.5-7 7 0m-7 4q3.5 7 7 0");
}
</style><path class="hnqu4acwk"/>`,
		"fallback": "uix-sharp:electric-field",
	});
}

export default Component;
