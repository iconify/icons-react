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
		"content": `<style>.k0ppykb0k {
  fill: currentColor;
  d: path("M7.5 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6.5-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6.5-18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="k0ppykb0k"/>`,
		"fallback": "fluent:dialpad-28-filled",
	});
}

export default Component;
