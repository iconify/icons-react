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
		"content": `<style>.fk50ifbth {
  d: path("M12 2.5c-3.5 0-6.5 3-6.5 7c0 6 6.5 12 6.5 12s6.5-6 6.5-12c0-4-3-7-6.5-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z52bkmbky {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="fk50ifbth"/><path class="z52bkmbky"/></g>`,
		"fallback": "uix-sharp:ad-location",
	});
}

export default Component;
