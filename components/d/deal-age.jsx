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
		"content": `<style>.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wiubtcb5c {
  d: path("M12.7 18.5H2.5V4H18v7.9M6.5 2v4M14 2v4M2.5 9.25H18m-2.5 5.5h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}
</style><g class="ulnmmdpxh"><path class="wiubtcb5c"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:deal-age",
	});
}

export default Component;
