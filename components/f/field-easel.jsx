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
		"content": `<style>.rhzm0mb1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v10H5Zm4 10l-4 8.5M15 13l4 8.5M12 13v6.5");
}
</style><path class="rhzm0mb1h"/>`,
		"fallback": "uix-sharp:field-easel",
	});
}

export default Component;
