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
		"content": `<style>.foh-fybmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8.25h16.5v13H3.75zm3.5 9.5h9.5M12 14.25V2.75M8.75 6L12 2.75L15.25 6");
}
</style><path class="foh-fybmn"/>`,
		"fallback": "iconoven:context-overflow-sharp",
	});
}

export default Component;
