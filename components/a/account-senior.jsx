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
		"content": `<style>.ii_3isb1e {
  d: path("M17.75 14c-.05-.51-.56-.75-1.25-.75c-.84 0-1.35.42-1.25 1c-.1 1.31 2.6.77 2.5 2.5c.1.55-.47 1-1.25 1c-.72 0-1.23-.3-1.25-.75m1.25-4.75v1m0 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4qg5cn0v {
  d: path("M9 19.75V6.25a3.25 3.25 0 0 0-6.5 0V8M8 19.75h2v1.75H8Zm3.5-4.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="v4qg5cn0v"/><path class="ii_3isb1e"/></g>`,
		"fallback": "uix-sharp:account-senior",
	});
}

export default Component;
