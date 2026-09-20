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
		"content": `<style>.ad7ub2npm {
  fill: currentColor;
  d: path("M9 13V7Q6.5 7 4.75 8.75T3 13zm4 4V7h-2v8H3v2zm2-3.2l6-.6V12h-6zM13 22H3v-2h10zm2-3H3q-.825 0-1.412-.587T1 17v-4q0-3.35 2.325-5.675T9 5h6v5h5l1-2h2v7l-8 .8zm4-15H3V2h16zm-4 9.8V12zM13 17");
}
</style><path class="ad7ub2npm"/>`,
		"fallback": "material-symbols:helicopter-outline",
	});
}

export default Component;
