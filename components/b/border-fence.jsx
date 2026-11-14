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
		"content": `<style>.pg90z4zhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m3.75 0V11l1.5-1.5l1.5 1.5v10.5m2.75 0V11L14 9.5l1.5 1.5v10.5m2.75 0V11l1.5-1.5l1.5 1.5v10.5M3 15h3.75m3 0h2.75m3 0h2.75M3 2.5L10 5L3 7.5Z");
}
</style><path class="pg90z4zhp"/>`,
		"fallback": "uix-sharp:border-fence",
	});
}

export default Component;
