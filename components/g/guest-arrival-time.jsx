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
		"content": `<style>.smbpj8b0b {
  d: path("M5.5 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM3 21l4.75-4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xp1_wt6oq {
  d: path("M4.25 16.25h3.5v3.5M13.5 6v4.5l3 2");
}
</style><g class="ulnmmdpxh"><path class="smbpj8b0b"/><path class="xp1_wt6oq"/></g>`,
		"fallback": "uix-sharp:guest-arrival-time",
	});
}

export default Component;
