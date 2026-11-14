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
		"content": `<style>.lwvcmrbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm0 9.5h15M12 5.25v3.5M10.25 7h3.5m-3.5 9.75h3.5");
}
</style><path class="lwvcmrbzs"/>`,
		"fallback": "uix-sharp:code-diff-unified",
	});
}

export default Component;
