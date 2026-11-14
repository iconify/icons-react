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
		"content": `<style>.hkz9gchkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5h11V21h-11ZM4 11h7.5v6.5H4Zm5.5 0L20 3.5m0 0V13m-2.25 0H22l-.75 4H18.5Z");
}
</style><path class="hkz9gchkg"/>`,
		"fallback": "uix-sharp:dragline",
	});
}

export default Component;
