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
		"content": `<style>.e1jzruukj {
  d: path("M12.5 6.75a3.5 3.5 0 1 0 0 5.5a3 3 0 0 1 0-5.5ZM14 14l.75 1.75l1.75.75l-1.75.75L14 19l-.75-1.75l-1.75-.75l1.75-.75Z");
}

.s0v3ln17o {
  d: path("M4 2.5h15.5v19H4ZM19.5 5l2 1v12l-2 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s0v3ln17o"/><path class="e1jzruukj"/></g>`,
		"fallback": "uix-sharp:eid-greeting-card",
	});
}

export default Component;
