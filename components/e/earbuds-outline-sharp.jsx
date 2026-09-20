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
		"content": `<style>.pivzbktmd {
  fill: currentColor;
  d: path("M4.818 19.184Q3.5 17.868 3.5 16V6.046q0-1.061.748-1.804q.748-.742 1.79-.742H8.5v5h-4V16q0 1.458 1.022 2.48q1.021 1.02 2.48 1.02t2.479-1.02T11.5 16V8q0-1.868 1.316-3.184Q14.13 3.5 15.997 3.5t3.185 1.316T20.5 8v10q0 1.044-.76 1.772q-.761.728-1.786.728H15.5v-5h4V8q0-1.458-1.022-2.48q-1.021-1.02-2.48-1.02t-2.479 1.02T12.5 8v8q0 1.868-1.315 3.184Q9.869 20.5 8.002 20.5t-3.185-1.316M4.5 7.5h3v-3H6q-.617 0-1.059.441Q4.5 5.383 4.5 6zm12 12H18q.617 0 1.059-.441q.441-.442.441-1.059v-1.5h-3zM18 18");
}
</style><path class="pivzbktmd"/>`,
		"fallback": "material-symbols-light:earbuds-outline-sharp",
	});
}

export default Component;
