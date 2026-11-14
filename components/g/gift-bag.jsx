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
		"content": `<style>.c349jzpxi {
  d: path("M12 14c-1.5-2.5-3.5-2.25-3.25-1C9 14 10.5 14 12 14Zm0 0c1.5-2.5 3.5-2.25 3.25-1c-.25 1-1.75 1-3.25 1Zm-1.5 3.5L12 14l1.5 3.5");
}

.lhe62-b5n {
  d: path("M5 8h14l-.75 11a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2Zm3.5 0V6.5a3.5 3.5 0 0 1 7 0V8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lhe62-b5n"/><path class="c349jzpxi"/></g>`,
		"fallback": "uix-sharp:gift-bag",
	});
}

export default Component;
