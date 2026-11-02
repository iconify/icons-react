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
		"content": `<style>.t_z5xddyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v18H5Zm14 5h2m-2 8h2M9 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0M8 21a4 4 0 1 1 8 0");
}
</style><path class="t_z5xddyd"/>`,
		"fallback": "coolicons:contacts-sharp",
	});
}

export default Component;
