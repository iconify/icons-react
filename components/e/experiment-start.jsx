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
		"content": `<style>.sbax_44cj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.216 21H2.5l6-12V2.5H13V9l.805 1.61M6.5 13h5.7m2.8 1.5l6 3.5l-6 3.5Z");
}
</style><path class="sbax_44cj"/>`,
		"fallback": "uix-sharp:experiment-start",
	});
}

export default Component;
