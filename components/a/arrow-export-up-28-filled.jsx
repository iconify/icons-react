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
		"content": `<style>.ab8yl7xtk {
  fill: currentColor;
  d: path("M22 24a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2zM13.293 2.293a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 1 1-1.414 1.414L15 5.414V21a1 1 0 1 1-2 0V5.414l-4.793 4.793a1 1 0 1 1-1.414-1.414z");
}
</style><path class="ab8yl7xtk"/>`,
		"fallback": "fluent:arrow-export-up-28-filled",
	});
}

export default Component;
