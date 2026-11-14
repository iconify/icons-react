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
		"content": `<style>.kssu0pbsm {
  d: path("m17.556 9.641l1.881 5.168l-14.096 5.13l-1.881-5.168ZM6.75 16.5h.01");
}

.quz89fb4a {
  d: path("m11.667 4.683l4.505 3.155l-8.603 12.287l-4.506-3.154Z");
}

.t3xf9kbbb {
  d: path("M4 4h5.5v15H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t3xf9kbbb"/><path class="quz89fb4a"/><path class="kssu0pbsm"/></g>`,
		"fallback": "uix-sharp:color-scheme",
	});
}

export default Component;
