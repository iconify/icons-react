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
		"content": `<style>.ae__a4bon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.541 11.859L12 9.5l-2.75 12H3.5L5 2.5h14l.614 7.776m-6.068 5.969l-.224-.974M5 6h14m-4.75 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2.25-1.75l4.25-5m-1.25 5l-4.25-5");
}
</style><path class="ae__a4bon"/>`,
		"fallback": "uix-sharp:alterations-service",
	});
}

export default Component;
