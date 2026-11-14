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
		"content": `<style>.car9wqb9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m3.75 0V11l1.5-1.5l1.5 1.5v10.5m2.75 0V11L14 9.5l1.5 1.5v10.5m2.75 0V11l1.5-1.5l1.5 1.5v10.5M3 15h3.75m3 0h2.75m3 0h2.75M5.005 3.216L6.5 3.75a1.327 1.327 0 0 1 0 2.5l-1.495.534A1.5 1.5 0 0 1 3 5.371v-.742a1.5 1.5 0 0 1 2.005-1.413");
}
</style><path class="car9wqb9l"/>`,
		"fallback": "uix:border-fence",
	});
}

export default Component;
