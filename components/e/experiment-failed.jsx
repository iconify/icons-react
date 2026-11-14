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
		"content": `<style>.m7v5isugi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.016 21H2.5l6-12V2.5H13V9l1.699 3.399M6.5 13h7.6m1.4 2.5l5 5m0-5l-5 5");
}
</style><path class="m7v5isugi"/>`,
		"fallback": "uix-sharp:experiment-failed",
	});
}

export default Component;
