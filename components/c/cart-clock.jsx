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
		"content": `<style>.bjp3m-b6a {
  d: path("M2.5 3.5h2L7 15m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8-1a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ohmm7ghkt {
  d: path("M5.25 7H20.5l-1.25 5.25h-7V15H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8_iddcar {
  d: path("M18 16.75V18l1 1");
}
</style><g class="ulnmmdpxh"><path class="ohmm7ghkt"/><path class="bjp3m-b6a"/><path class="y8_iddcar"/></g>`,
		"fallback": "uix-sharp:cart-clock",
	});
}

export default Component;
