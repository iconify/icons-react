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
		"content": `<style>.iwbmgtb3j {
  d: path("M7.5 9L12 6l4.5 3ZM9 9v4.5M12 9v4.5M15 9v4.5m-7.5 0h9M12 18h.01");
}

.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="iwbmgtb3j"/></g>`,
		"fallback": "uix-sharp:bank-smart-branch",
	});
}

export default Component;
