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
		"content": `<style>.u1xvn3bgj {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-4a.75.75 0 0 1 0-1.5h4a1.75 1.75 0 0 0 1.75-1.75V12h-5.25A2.25 2.25 0 0 1 12 9.75V4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v4a.75.75 0 0 1-1.5 0zm.75 8.25a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-4.69l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22z");
}
</style><path class="u1xvn3bgj"/>`,
		"fallback": "fluent:contract-up-right-24-filled",
	});
}

export default Component;
