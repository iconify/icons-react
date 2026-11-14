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
		"content": `<style>.bc9tdhbry {
  d: path("M2.5 4.5v6a4.5 1.75 0 0 0 9 0v-6m1 9a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0Z");
}

.rj2amhbku {
  d: path("M12.5 13.5v6a4.5 1.75 0 0 0 9 0v-6M7 12.25V17h5.5");
}

.su47abe3x {
  d: path("M2.5 4.5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="su47abe3x"/><path class="bc9tdhbry"/><path class="rj2amhbku"/></g>`,
		"fallback": "uix-sharp:database-connection",
	});
}

export default Component;
