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
		"content": `<style>.u4djjtiyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19m-17 0v6.5h15V15M7.25 7.25a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0ZM12 5.5h.01M12 8v2");
}
</style><path class="u4djjtiyi"/>`,
		"fallback": "uix-sharp:info-desk",
	});
}

export default Component;
