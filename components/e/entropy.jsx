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
		"content": `<style>.s_398r4lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h1.25a1.5 1.5 0 0 1 1.5 1.5v1.25a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 5.75V4.5A1.5 1.5 0 0 1 4.5 3m0 7h1.25a1.5 1.5 0 0 1 1.5 1.5v1.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5V11.5A1.5 1.5 0 0 1 4.5 10m0 7h1.25a1.5 1.5 0 0 1 1.5 1.5v1.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5V18.5A1.5 1.5 0 0 1 4.5 17m9.346-9.777l-1.192-.446a1.5 1.5 0 0 1-.877-1.931l.446-1.192a1.5 1.5 0 0 1 1.931-.877l1.192.446a1.5 1.5 0 0 1 .877 1.931l-.446 1.192a1.5 1.5 0 0 1-1.931.877m4.808 7l1.192-.446a1.5 1.5 0 0 0 .877-1.931l-.446-1.192a1.5 1.5 0 0 0-1.931-.877l-1.192.446a1.5 1.5 0 0 0-.877 1.931l.446 1.192a1.5 1.5 0 0 0 1.931.877m-4.093 2.088l.878.878a1.5 1.5 0 0 1 0 2.122l-.878.878a1.5 1.5 0 0 1-2.122 0l-.878-.878a1.5 1.5 0 0 1 0-2.122l.878-.878a1.5 1.5 0 0 1 2.122 0");
}
</style><path class="s_398r4lg"/>`,
		"fallback": "uix:entropy",
	});
}

export default Component;
