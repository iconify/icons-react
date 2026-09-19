import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fujsstjml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.819c-10.77 0-19.5 8.73-19.5 19.5q0 .431.019.862l38.975-.313q.006-.274.006-.55c0-10.769-8.73-19.499-19.5-19.5Z");
}
</style><path class="fujsstjml"/>`,
		"fallback": "arcticons:coverflex",
	});
}

export default Component;
