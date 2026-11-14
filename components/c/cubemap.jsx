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
		"content": `<style>.e5ez3mbiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.75H12V9.5h9.5v4.75H12V19H7.25v-4.75H2.5V9.5h4.75Zm0 4.75H12m-4.75 4.75H12M7.25 9.5v4.75M12 9.5v4.75m4.75-4.75v4.75");
}
</style><path class="e5ez3mbiy"/>`,
		"fallback": "uix-sharp:cubemap",
	});
}

export default Component;
