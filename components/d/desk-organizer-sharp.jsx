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
		"content": `<style>.htb400b2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 12.25l-.75-7m3.5 7l.75-5.5m2.5 5.5v-8.5h8.25v8.5m-16.5 0h18.5v9H2.75zm7 0v9");
}
</style><path class="htb400b2t"/>`,
		"fallback": "iconoven:desk-organizer-sharp",
	});
}

export default Component;
