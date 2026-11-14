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
		"content": `<style>.mi6i9wbva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H7v14H2.5ZM17 5h4.5v14H17Zm-7.25 7h4.5M12 9.75L14.25 12L12 14.25");
}
</style><path class="mi6i9wbva"/>`,
		"fallback": "uix-sharp:heat-transfer",
	});
}

export default Component;
