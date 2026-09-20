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
		"content": `<style>.g82sbnbey {
  fill: currentColor;
  d: path("M21 12H3V4h18zM4.5 18.077v-1.02q1.23 0 2.096-.857q.865-.859.865-2.084h1.02q0 1.651-1.165 2.806q-1.164 1.155-2.816 1.155m15 0q-1.652 0-2.807-1.159t-1.155-2.802h1.02q0 1.23.858 2.086t2.084.856zm-8 1.039v-5h1v5zM20 11H4zM6.692 11V7.5h10.635V11h-1V8.5H7.692V11zM4 11h16V5H4z");
}
</style><path class="g82sbnbey"/>`,
		"fallback": "material-symbols-light:climate-mini-split-outline-sharp",
	});
}

export default Component;
