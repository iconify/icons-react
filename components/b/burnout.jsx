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
		"content": `<style>.gf-xg_b3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3s4.5 4.5 4.5 9.75a4.5 4.5 0 0 1-9 0C7.5 10.5 9 9 10 7.5c.5 1.75 1.25 2.25 2 2.25C12.5 7.5 12 5 12 3ZM5 21h14");
}
</style><path class="gf-xg_b3t"/>`,
		"fallback": "uix-sharp:burnout",
	});
}

export default Component;
