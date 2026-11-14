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
		"content": `<style>.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpbletbft {
  d: path("m10.75 13.75l1.75-1v5");
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="xpbletbft"/></g>`,
		"fallback": "uix-sharp:calendar-day",
	});
}

export default Component;
