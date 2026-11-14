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
		"content": `<style>.h1p9stbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m.5 12.5l.324-.864A1.75 1.75 0 0 1 10.713 17h2.574a1.75 1.75 0 0 1 1.639 1.136l.324.864a1.48 1.48 0 0 1-1.386 2h-3.728a1.48 1.48 0 0 1-1.386-2M12 10.25V17");
}
</style><path class="h1p9stbsn"/>`,
		"fallback": "uix:gear-stick",
	});
}

export default Component;
