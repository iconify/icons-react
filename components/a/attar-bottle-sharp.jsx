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
		"content": `<style>.o1_mfs47f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c1.4 1.4 2.25 2.65 2.25 3.75a2.25 2.25 0 0 1-4.5 0c0-1.1.85-2.35 2.25-3.75Zm.78 7.63l4.94 3.99l.78.63l-.72.69l-5.06 4.87l-.72.69l-.72-.69l-5.06-4.87L5.5 15l.78-.63l4.94-3.99l.78-.63zM7 15h10m-5-4v9");
}
</style><path class="o1_mfs47f"/>`,
		"fallback": "iconoven:attar-bottle-sharp",
	});
}

export default Component;
