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
		"content": `<style>.ul5ld_3si {
  d: path("M10.5 21.5v-4h3v4m-8.25-8h.01m13.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xitivn-hm {
  d: path("M8 2.5h8v19H8ZM8 9H4c-.8 0-1.5.7-1.5 1.5v11H8M16 9h4c.8 0 1.5.7 1.5 1.5v11H16m-5.75-16v6m3.5-6v6m-3.5-3h3.5");
}
</style><g class="ulnmmdpxh"><path class="xitivn-hm"/><path class="ul5ld_3si"/></g>`,
		"fallback": "uix-sharp:hospital-building",
	});
}

export default Component;
