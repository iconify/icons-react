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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.sg0mav3rd {
  d: path("M12.242 20.5H5l-2-14h16l-.82 5.742M5.5 6.5a5.5 4 0 0 1 11 0m-1.5 11h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sg0mav3rd"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:bucket-policy",
	});
}

export default Component;
