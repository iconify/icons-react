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
		"content": `<style>.q0x7yjbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h11v9.5h-11zm2.5 0V9.5a3 3 0 0 1 6 0v2.25m-3 3.5v2.5m9.13-11.81l3.18 3.18l.53.53l-.53.53l-.88.88l-.53.53l-.53-.53l-3.18-3.18l-.53-.53l.53-.53l.88-.88l.53-.53zm-.07 3.25L12 14.5");
}
</style><path class="q0x7yjbjk"/>`,
		"fallback": "iconoven:brute-force-sharp",
	});
}

export default Component;
