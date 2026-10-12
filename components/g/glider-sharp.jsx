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
		"content": `<style>.zwdvox_ml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75h1.75v9l-1.15 8h-1.2l-1.15-8v-9zM12 5v2.25m-9.25 3L10.25 9m3.5 0l7.5 1.25m-12.5 9.5h6.5");
}
</style><path class="zwdvox_ml"/>`,
		"fallback": "iconoven:glider-sharp",
	});
}

export default Component;
