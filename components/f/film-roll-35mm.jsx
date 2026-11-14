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
		"content": `<style>.n4irr_q9q {
  d: path("M11 17.5h10.5v3.25H14M9.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12.75 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.sd95s0tfn {
  d: path("M3.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sd95s0tfn"/><path class="n4irr_q9q"/></g>`,
		"fallback": "uix-sharp:film-roll-35mm",
	});
}

export default Component;
