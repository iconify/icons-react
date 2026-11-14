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
		"content": `<style>.xy3joo_th {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v17.5M12 3v17.5M20 3v17.5M4 6h16M2.5 20.5h19M4 10c5 4 11 4 16 0");
}
</style><path class="xy3joo_th"/>`,
		"fallback": "uix:catch-fence",
	});
}

export default Component;
