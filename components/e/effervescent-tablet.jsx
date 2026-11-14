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
		"content": `<style>.ruql7rrrq {
  d: path("M8.5 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxdy0cbia {
  d: path("m3.5 9.5l1.5 12h10l1.5-12M4 13h12m.35-9.303l4.532-2.113l1.268 2.719l-4.532 2.113Z");
}
</style><g class="ulnmmdpxh"><path class="uxdy0cbia"/><path class="ruql7rrrq"/></g>`,
		"fallback": "uix-sharp:effervescent-tablet",
	});
}

export default Component;
