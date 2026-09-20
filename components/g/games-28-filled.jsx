import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u0077cc2j {
  fill: currentColor;
  d: path("M10.5 5.5a8.5 8.5 0 0 0 0 17h7a8.5 8.5 0 1 0 0-17zm7.5 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5-2.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-14-.25a.75.75 0 0 1 .75-.75H8v-1.75a.75.75 0 0 1 1.5 0V13h1.75a.75.75 0 0 1 0 1.5H9.5v1.75a.75.75 0 1 1-1.5 0V14.5H6.25a.75.75 0 0 1-.75-.75");
}
</style><path class="u0077cc2j"/>`,
		"fallback": "fluent:games-28-filled",
	});
}

export default Component;
