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
		"content": `<style>.p-_zmualw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.884 4.045l7.071 7.071l-2.475 2.475l-7.071-7.071Zm1.061 6.01L12.53 11.47m-.884-.884l1.768 1.768l-7.424 7.424l-1.768-1.768Zm1.415-3.889l4.242 4.242");
}
</style><path class="p-_zmualw"/>`,
		"fallback": "uix-sharp:disposable-razor",
	});
}

export default Component;
