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
		"content": `<style>.rzrhf-7rt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.51 36.19l-.55-2A21.5 21.5 0 1 0 34.14 43l2 .55l7.2 1.93a1.67 1.67 0 0 0 2-1.18a1.6 1.6 0 0 0 0-.87Zm-10-14.39a2.2 2.2 0 1 1-2.2 2.2a2.23 2.23 0 0 1 2.22-2.2Zm-19.04 4.4a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2m9.53 0a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2");
}
</style><path class="rzrhf-7rt"/>`,
		"fallback": "arcticons:conversations",
	});
}

export default Component;
