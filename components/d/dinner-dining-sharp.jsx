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
		"content": `<style>.z3bxfebpk {
  fill: currentColor;
  d: path("m4 21l-2-2h20l-2 2zm-1-3q.15-.45.4-.85t.6-.75V9H3V7.5h1v-.75H3v-1.5h1V4.5H3V3h9v2.25h9v1.5h-9V9H8v6.1q.35.05.7.15t.65.3q.65-1.625 2.075-2.587t3.15-.963q2.25 0 3.838 1.538T20 17.3v.7zM8 5.25h2V4.5H8zM8 7.5h2v-.75H8zM5.5 5.25h1V4.5h-1zm0 2.25h1v-.75h-1zm0 7.85q.25-.125.488-.187t.512-.113V9h-1z");
}
</style><path class="z3bxfebpk"/>`,
		"fallback": "material-symbols:dinner-dining-sharp",
	});
}

export default Component;
