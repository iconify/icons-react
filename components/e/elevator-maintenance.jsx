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
		"content": `<style>.iqi5hfblf {
  d: path("M11.6 21.5H3.5V8h17v4.1m0 9.3v.1h-1.1m-.4 0h-.6");
}

.tejz_p6ps {
  d: path("M11.6 21.5H6.5V11h11v1.3M12 11v9.1M8.5 6V2.5M6.75 4.25L8.5 2.5l1.75 1.75M15.5 2.5V6m-1.75-1.75L15.5 6l1.75-1.75m3.97 12.153a2 2 0 1 1-1.623-1.623M15 21l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iqi5hfblf"/><path class="tejz_p6ps"/></g>`,
		"fallback": "uix-sharp:elevator-maintenance",
	});
}

export default Component;
