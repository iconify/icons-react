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
		"content": `<style>.zoyosdb-l {
  fill: currentColor;
  d: path("M7 3a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h10a1 1 0 1 0 0-2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a1 1 0 1 0 0-2zm13.207 4.793a1 1 0 1 0-1.414 1.414L22.586 13H10a1 1 0 1 0 0 2h12.586l-3.793 3.793a1 1 0 0 0 1.414 1.414l5.5-5.5a1 1 0 0 0 0-1.414z");
}
</style><path class="zoyosdb-l"/>`,
		"fallback": "fluent:arrow-exit-28-filled",
	});
}

export default Component;
