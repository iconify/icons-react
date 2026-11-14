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
		"content": `<style>.b_gjafbad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8h6v12.5H9ZM6.5 3h11M12 3v5M5.5 20.5h13M15 17c4.5 0 5.5-3 5.5-8");
}
</style><path class="b_gjafbad"/>`,
		"fallback": "uix-sharp:ball-pump",
	});
}

export default Component;
