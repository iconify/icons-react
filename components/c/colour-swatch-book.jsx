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
		"content": `<style>.iacr26bms {
  d: path("M14.75 9h4v5h-4Z");
}

.lgma68aql {
  d: path("M12 6c-2-1.5-6-2-9.5-1.5v14C6 18 10 18.5 12 20c2-1.5 6-2 9.5-1.5v-14C18 4 14 4.5 12 6Zm0 0v14M5.25 9.5h4m-4 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lgma68aql"/><path class="iacr26bms"/></g>`,
		"fallback": "uix-sharp:colour-swatch-book",
	});
}

export default Component;
