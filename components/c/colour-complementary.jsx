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
		"content": `<style>.ggrw036nk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25a9.5 9.5 0 0 1 6.5-6.5m12 12a9.5 9.5 0 0 1-6.5 6.5M12 2.5a9.5 9.5 0 0 1 9.5 9.5h-4A5.5 5.5 0 0 0 12 6.5Zm0 19A9.5 9.5 0 0 1 2.5 12h4a5.5 5.5 0 0 0 5.5 5.5Z");
}
</style><path class="ggrw036nk"/>`,
		"fallback": "uix-sharp:colour-complementary",
	});
}

export default Component;
